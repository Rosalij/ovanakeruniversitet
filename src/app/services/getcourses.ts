/*Service for getting university courses from local file miun_courses.json, using HttpClient*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class Getcourses {
  //properties 
  url: string = "/miun_courses.json";

  constructor(private http: HttpClient) { } 
  
  //methods
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
  }
