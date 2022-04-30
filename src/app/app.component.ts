import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { UserService } from './admin/admin.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  
  username: string;
  user: any;

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.getUser();
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    }
  }

  getUser() {
    this.userService.getUserByEmail(this.tokenStorageService.getUser().email).subscribe(
      data => {
        this.user = data;
        this.roles = this.user.roles;
        this.username = this.user.username;
      },
      err => {
        this.user = JSON.parse(err.error).message;
      }
    );
}
  

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
