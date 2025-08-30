/*This component is made with Google Angular Material components. */
//imports
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../header/header';
import { MatButtonModule } from '@angular/material/button';


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


  ngOnInit(): void {
    //get saved courses in local storage
    const saved = localStorage.getItem('savedCourses');
    this.savedCourses = saved ? JSON.parse(saved) : [];
  }

  //get total university points for all saved courses together
  get totalPoints(): number {
    return this.savedCourses.reduce((sum, course) => sum + course.points, 0);
  }

  //remove course for remove button
  removeCourse(course: Course): void {
    //get saved courses from localStorage
    let saved = JSON.parse(localStorage.getItem('savedCourses') || '[]');
    //Remove the course by courseCode
    saved = saved.filter((c: Course) => c.courseCode !== course.courseCode);
    //save back to localStorage
    localStorage.setItem('savedCourses', JSON.stringify(saved));
    //update the table
    this.savedCourses = saved;
  }
}