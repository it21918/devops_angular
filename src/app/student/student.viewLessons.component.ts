import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { StudentService } from './student.service';


@Component({
  selector: 'app-profile',
  templateUrl: './student.viewLessons.component.html',
  styleUrls: ['./student.viewLessons.component.css']
})
export class ViewLessonsComponent implements OnInit {
    currentUser: any;
    requestsLessons: any[];
    requestsLetter: any;
    request: any;
    href: string = "";

    constructor(
        private token: TokenStorageService,
        private studentService: StudentService,
        private router: Router
      ) { }
  
    ngOnInit() {
      this.currentUser = this.token.getUser();
      this.href = this.router.url;
      this.getRequestById();
      this.getLessonsByRequestId();
      this.getLetterByRequestId();
    }


      public getRequestById(): void {
        this.studentService.getRequestById(this.href).subscribe(
            data => {
              this.request = data;
            },
            err => {
              this.request= JSON.parse(err.error).message;
            }
          );
      }     

      public getLessonsByRequestId(): void {
        this.studentService.getLessonsByRequestId(this.href).subscribe(
            data => {
              console.log(JSON.stringify(data));
              this.requestsLessons = data;
            },
            err => {
              this.requestsLessons = JSON.parse(err.error).message;
            }
          );
      }

      public getLetterByRequestId(): void {
        this.studentService.getLetterByRequestId(this.href).subscribe(
            data => {
              console.log(JSON.stringify(data));
              this.requestsLetter = data;
            },
            err => {
              this.requestsLetter = JSON.parse(err.error).message;
            }
          );
      }

}