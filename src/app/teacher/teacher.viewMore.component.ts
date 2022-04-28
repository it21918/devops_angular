import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { TokenStorageService } from "../_services/token-storage.service";
import { TeacherService } from "./teacher.service";


@Component({
    selector: 'app-profile',
    templateUrl: './teacher.viewMore.component.html',
    styleUrls: ['./teacher.viewMore.component.css']
  })
export class TeacherViewLessonsComponent implements OnInit {
    currentUser: any;
    requestsLessons: any[];
    requestsLetter: any;
    request: any[];
    href: string = "";

    constructor(
        private token: TokenStorageService,
        private studentService: TeacherService,
        private router: Router
      ) { }
  
    ngOnInit() {

      this.currentUser = this.token.getUser();
      this.href = this.router.url;
      this.getLessonsByRequestId();
      this.getLetterByRequestId();
      this.getRequestById();
      }


      public getRequestById(): void {
        this.studentService.getTeacherRequest2(this.href).subscribe(
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
              this.requestsLetter = data;
            },
            err => {
              this.requestsLetter = JSON.parse(err.error).message;
            }
          );
      }

      public gotoRejection(id : any) {
        this.studentService.rejectRequest(id).subscribe(
          data => {
            this.request = data;
          },
          err => {
            this.request = JSON.parse(err.error).message;
          }
        );
      }


}