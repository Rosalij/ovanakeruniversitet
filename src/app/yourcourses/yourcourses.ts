/*This component is made with Google Angular Material components. */
//imports
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../header/header';
import { MatButtonModule } from '@angular/material/button';
import { SavedCoursesService } from '../services/savedcourses';

@Component({
  selector: 'app-yourcourses',
  imports: [MatButtonModule, CommonModule, HeaderComponent, MatTableModule],
  templateUrl: './yourcourses.html',
  styleUrl: './yourcourses.scss'
})

export class Yourcourses {
  savedCourses: Course[] = [];
  displayedColumns: string[] = ['courseName', 
    'courseCode', 
    'points', 
    'progression', 
    'subject',
     'syllabus', 
     'actions'];

  //inject service savedCoursesService, to call it's methods for local storage
  constructor(private savedCoursesService: SavedCoursesService) { }

  //get saved courses from local storage when initializing
  ngOnInit(): void {
    this.savedCourses = this.savedCoursesService.getSavedCourses();
  }

  //remove course from localstorage by coursecode suing service
  removeCourse(course: Course): void {
    this.savedCoursesService.removeCourse(course.courseCode);
    this.savedCourses = this.savedCoursesService.getSavedCourses();
  }

  //sums all university points from courses to a total point score
  get totalPoints(): number {
    return this.savedCourses.reduce((sum, course) => sum + course.points, 0);
  }
}