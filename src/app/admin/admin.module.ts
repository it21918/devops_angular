import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserComponent } from './admin.component';
import { UserService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [UserService],
  bootstrap: [UserComponent]
})
export class AppModule { }