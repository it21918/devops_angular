import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { UserComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { ViewLessonsComponent } from './student/student.viewLessons.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherViewLessonsComponent } from './teacher/teacher.viewMore.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'adminPage', component: UserComponent },
  { path: 'studentPage', component: StudentComponent},
  { path: 'teacherPage', component: TeacherComponent},
  { path: ':id', component: ViewLessonsComponent },
  { path: 'teacher/:id', component: TeacherViewLessonsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
