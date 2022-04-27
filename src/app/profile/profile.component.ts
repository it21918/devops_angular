import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../admin/admin.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  moreDetails: any;

  constructor(
    private token: TokenStorageService,
    private UserService: UserService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.getUser();
    }

    public getUser(): void {
      this.UserService.getUserByEmail(this.currentUser.email).subscribe(
        (response: any[]) => {
          this.moreDetails = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    public onUpdateUserDetails(user: any): void {
      user.email = this.currentUser.email;
      this.UserService.updateUserDetails(user).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }




}
