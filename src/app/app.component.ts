import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { UserService } from './admin/admin.service'
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  studentPage = false;
  showModeratorBoard = false;

  student = false;
  teacher = false;
  admin = false;
  
  username: string;
  user: any;

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      if(this.tokenStorageService.getUser().roles == 'ROLE_STUDENT') {
        this.student = true;
      }
      if(this.tokenStorageService.getUser().roles == 'ROLE_TEACHER') {
        this.teacher = true;
      }
      if(this.tokenStorageService.getUser().roles == 'ROLE_ADMIN') {
        this.admin = true;
      }
  }

}
  
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
