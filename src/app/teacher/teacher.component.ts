import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { TokenStorageService } from "../_services/token-storage.service";
import { TeacherService } from "./teacher.service";


@Component({
  selector: 'app-profile',
  templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css']
  })
export class TeacherComponent implements OnInit {

    currentUser: any;
    public requests: any[];
    href : string = ""
    
  
    constructor(
        private token: TokenStorageService,
        private teacherService: TeacherService,
        private router: Router,
      ) { }
  
    ngOnInit() {
      this.currentUser = this.token.getUser();
      this.getRequests();
      }
  
      public getRequests(): void {
        this.teacherService.getTeacherRequest(this.currentUser.id).subscribe(
          (response: any[]) => {
            this.requests = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
  
    gotoPage(pageName: string) : void {
      this.router.navigate(["teacher/"+`${pageName}`]);
    }
  
  
    public searchRequests(key: any): void {
        console.log(key);
        const results: any[] = [];
        for (const r of this.requests) {
          if (r.id.toLowerCase().indexOf(key.toLowerCase()) !== -1
          || r.id.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
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
      this.teacherService.saveLetter(addForm.value).subscribe(
        (response: any) => {
          //alert(response);
          addForm.reset();
        }
      );
    }
  /*
    public onViewLessons(requestId: number): void {
      this.currentUser.studentService.subscribe(
        (response: void) => {
          console.log(response);
          this.getEmployees();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }*/
  
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
      if(mode == 'viewLessons') {
        button.setAttribute('data-target', '#viewLessonsModal');
      }
      container.appendChild(button);
      button.click();
    }
  
}