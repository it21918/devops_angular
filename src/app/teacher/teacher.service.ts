import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

 addRequests(request : any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/student/saveRequest`, {
      purpose: request.purpose,
      receiver: request.receiver,
    }, httpOptions);
  }

addLesson(lesson : any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/student/saveLesson`, {
      grade: lesson.grade,
      name: lesson.name,
      semester: lesson.semester,
      requests: lesson,
      purpose: lesson.purpose,
      receiver: lesson.receiver
    }, httpOptions);
  }

getRecommendationLetters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/teacher/viewLetters`);
}

getTeacherRequest(requestId : string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiServerUrl}/teacher/getTeacherRequestsById/`+requestId);
}

getTeacherRequest2(requestId : string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiServerUrl}/teacher/getTeacherRequestsById/`+requestId.split('/')[2]);
}


getLessonsByRequestId(requestId: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiServerUrl}/student/getLessonsByRequestId/`+requestId.split('/')[2]);
}

getLetterByRequestId(requestId: string): Observable<any> {
  return this.http.get<any>(`${this.apiServerUrl}/student/getLetterByRequestId/`+requestId.split('/')[2]);
}

saveLetter(letter: any) : Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/teacher/saveLetter`, letter, httpOptions);
  }

  rejectRequest(id: any) : Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/teacher/rejectRequest`, id, httpOptions);
  }
}
