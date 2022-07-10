import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserComponent } from './admin/admin.component'
import { StudentComponent } from './student/student.component';
import { ViewLessonsComponent } from './student/student.viewLessons.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherViewLessonsComponent } from './teacher/teacher.viewMore.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    StudentComponent,
    UserComponent,
    TeacherComponent,
    ViewLessonsComponent,
    TeacherViewLessonsComponent,
    TeacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],

})
export class AppModule { }
