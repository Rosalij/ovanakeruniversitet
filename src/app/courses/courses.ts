/*This component shows a table of courses and uses Google Angular material components to show table, filter options and pagination */ 

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Course } from '../models/course';
import { Getcourses } from '../services/getcourses';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from '../header/header';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { SavedCoursesService } from '../services/savedcourses';

//component
@Component({
  selector: 'app-courses',
  imports: [MatButtonModule, MatSortModule, MatTableModule, HeaderComponent, MatSelectModule, CommonModule,FormsModule, MatInputModule, MatPaginatorModule
  ],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss']
})
export class Courses {
  courses: Course[] = [];
  searchTerm: string = '';
  subjects: string[] = [];
  selectedSubject: string = '';

  //name of columns on table
  displayedColumns: string[] = [
    'courseName',
    'courseCode',
    'points',
    'progression',
    'subject',
    'syllabus',
    'save'
  ];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //dataSource used in table, using Course interface
  dataSource = new MatTableDataSource<Course>();

  constructor(
    private getCourses: Getcourses, //inject service Getcourses to use methods on component
    private cdr: ChangeDetectorRef, //detect change
    private savedCoursesService: SavedCoursesService //inject service SavedCoursessService to use methods on component
  ) {}

  ngOnInit(): void {
    //load all courses from service
    this.getCourses.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.dataSource = new MatTableDataSource(courses); //new table
      this.dataSource.sort = this.sort; //sorting
      this.dataSource.paginator = this.paginator; //pagination
      //filter subjects
      this.subjects = [...new Set(courses.map(c => c.subject))];
    });
  }

  //filter courses according to subject via dropdown menu. 
  onSubjectChange(): void {
    if (this.selectedSubject) {
      //filter courses if subject is chosen
      this.dataSource.data = this.courses.filter(c => c.subject === this.selectedSubject);
    } else {
      this.dataSource.data = this.courses;
    }
    this.dataSource.paginator = this.paginator; //reset pagination on subject change
  }

//filter courses according to search input field value
  onSearch(): void {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  //push and save course to saved course list, using savedCoursesService methods and local storage
  addToSaved(course: Course): void {

    this.savedCoursesService.saveCourse(course); 
    console.log('Saved courses:', this.savedCoursesService.getSavedCourses()); 
  }

  //boolean value if course is saved or not, to disable/enable add button
  isCourseSaved(course: Course): boolean {
    return this.savedCoursesService.isCourseSaved(course.courseCode); 
  }
}
