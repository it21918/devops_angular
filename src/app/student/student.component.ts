import {
  HttpErrorResponse
} from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  Router,
  Routes
} from '@angular/router';
import {
  TokenStorageService
} from '../_services/token-storage.service';
import {
  StudentService
} from './student.service';


@Component({
  selector: 'app-profile',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  currentUser: any;
  public requests: any[];
  teachers: any[];
  lessons: any[];
  href: string = ""


  constructor(
      private token: TokenStorageService,
      private studentService: StudentService,
      private router: Router,
  ) {}

  ngOnInit() {
      this.currentUser = this.token.getUser();
      this.getRequests();
      this.getTeachers();
  }

  public getRequests(): void {
      this.studentService.getStudentRequest(this.currentUser.id).subscribe(
          (response: any[]) => {
              this.requests = response;
          },
          (error: HttpErrorResponse) => {
              alert(error.message);
          }
      );
  }

  gotoPage(pageName: string): void {
      this.router.navigate([`${pageName}`]);
  }

  public getTeachers(): void {
      this.studentService.getTeachers().subscribe(
          data => {
              this.teachers = data;
          },
          err => {
              this.teachers = JSON.parse(err.error).message;
          }
      );
  }



  public searchRequests(key: any): void {
      console.log(key);
      const results: any[] = [];
      for (const r of this.requests) {
          if (r.id.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
              r.id.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
              results.push(r);
          }
      }
      this.requests = results;
      if (results.length === 0 || !key) {
          this.getRequests();
      }
  }

  public onAddEmloyee(addForm: NgForm): void {
      document.getElementById('add-employee-form').click();
      this.studentService.addRequests(addForm.value).subscribe(
          (response: any) => {
              this.getRequests();
              this.studentService.addLesson(addForm.value).subscribe(
                  (response: any) => {
                  }
              )
              addForm.reset();
          }
      );
  }

  public editRequest: any;

  public onOpenModal(request: any, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
          button.setAttribute('data-target', '#addEmployeeModal');
      }
      if (mode == 'viewLessons') {
          button.setAttribute('data-target', '#viewLessonsModal');
      }
      container.appendChild(button);
      button.click();
  }


}