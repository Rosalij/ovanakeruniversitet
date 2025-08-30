/* Service for managing saved courses using local storage. */

import { Injectable } from '@angular/core';
import { Course } from '../models/course';
@Injectable({
  providedIn: 'root'
})
export class SavedCoursesService {
  //provide a key for local storage item
  private storageKey = 'savedCourses';

  constructor() { }

  //get all saved courses from local storage
  getSavedCourses(): Course[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  //save a new course
  saveCourse(course: Course): void {
    const savedCourses = this.getSavedCourses();
    //prevent duplicate courses and push course to localstorage if unique
    if (!savedCourses.some(c => c.courseCode === course.courseCode)) {
      savedCourses.push(course);
      localStorage.setItem(this.storageKey, JSON.stringify(savedCourses));
    }
  }


  //method for removing a course from local storage
  removeCourse(courseCode: string): void {
    const savedCourses = this.getSavedCourses();
    const filtered = savedCourses.filter(c => c.courseCode !== courseCode);
    localStorage.setItem(this.storageKey, JSON.stringify(filtered));
  }

  //check if a course is saved, returns boolean value if saved or not
  isCourseSaved(courseCode: string): boolean {
    return this.getSavedCourses().some(c => c.courseCode === courseCode);
  }

}