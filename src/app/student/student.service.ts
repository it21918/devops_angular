import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addRequests(request: any): Observable < any > {
      return this.http.post < any > (`${this.apiServerUrl}/student/saveRequest`, {
          purpose: request.purpose,
          receiver: request.receiver,
      }, httpOptions);
  }

  addLesson(lesson: any): Observable < any > {
      return this.http.post < any > (`${this.apiServerUrl}/student/saveLesson`, {
          grade: lesson.grade,
          name: lesson.name,
          semester: lesson.semester,
          requests: lesson,
          purpose: lesson.purpose,
          receiver: lesson.receiver
      }, httpOptions);
  }

  addLesson2(lesson: any): Observable < any > {
    return this.http.post < any > (`${this.apiServerUrl}/student/saveLesson`, {
        grade: lesson.grade2,
        name: lesson.name2,
        semester: lesson.semester2,
        requests: lesson,
        purpose: lesson.purpose,
        receiver: lesson.receiver
    }, httpOptions);
}

addLesson3(lesson: any): Observable < any > {
  return this.http.post < any > (`${this.apiServerUrl}/student/saveLesson`, {
      grade: lesson.grade3,
      name: lesson.name3,
      semester: lesson.semester3,
      requests: lesson,
      purpose: lesson.purpose,
      receiver: lesson.receiver
  }, httpOptions);
}

  getStudentRequest(requestId: string): Observable < any[] > {
      return this.http.get < any[] > (`${this.apiServerUrl}/student/getStudentRequestsById/` + requestId);
  }

  getLessons(): Observable < any[] > {
      return this.http.get < any[] > (`${this.apiServerUrl}/student/getLessons`);
  }

  getRecommendationLetters(): Observable < any[] > {
      return this.http.get < any > (`${this.apiServerUrl}/student/viewLetters`);
  }

  getTeachers(): Observable < any[] > {
      return this.http.get < any[] > (`${this.apiServerUrl}/student/getTeachers`);
  }

  getLessonsByRequestId(requestId: string): Observable < any[] > {
      return this.http.get < any[] > (`${this.apiServerUrl}/student/getLessonsByRequestId` + requestId);
  }

  getLetterByRequestId(requestId: string): Observable < any > {
      return this.http.get < any > (`${this.apiServerUrl}/student/getLetterByRequestId` + requestId);
  }

  getRequestById(requestId: string): Observable < any > {
      return this.http.get < any > (`${this.apiServerUrl}/student/getRequestById` + requestId);
  }


}