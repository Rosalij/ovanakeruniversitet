/*This component is made with Google Angular Material components. */
//imports
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Course } from '../models/course';
import { Getcourses } from '../services/getcourses';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from '../header/header';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButton } from '@angular/material/button';


//component
@Component({
  selector: 'app-courses',
  imports: [MatButton, MatSortModule, MatTableModule, HeaderComponent, MatSelectModule, CommonModule, FormsModule, MatInputModule, MatPaginatorModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss']
})

export class Courses {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  paginatedCourses: Course[] = [];
  subjects: string[] = [];
  selectedSubject: string = '';

  //table column names 
  displayedColumns: string[] = [
    'courseName',
    'courseCode',
    'points',
    'progression',
    'subject',
    'syllabus',
    'save'
  ];

  //array for saving courses
  savedCourses: Course[] = [];


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

//dataSource for course table
  dataSource = new MatTableDataSource<Course>();


  //constructor
  constructor(private getCourses: Getcourses,
    private cdr: ChangeDetectorRef//for angular to detect changes right away
  ) { }


  ngOnInit(): void {
    //get saved courses from localstorage
    const saved = localStorage.getItem('savedCourses');
    this.savedCourses = saved ? JSON.parse(saved) : [];
    //get all courses
    this.getCourses.getCourses().subscribe((courses) => {
      this.courses = courses;

      this.dataSource = new MatTableDataSource(courses);

      //enable sort + pagination at bottom of table
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      //subjects dropdown for filtering courses according to subject
      this.subjects = [...new Set(courses.map(c => c.subject))];
    });
  }

  //on subject change, filter courses based on subject
  onSubjectChange(): void {
    if (this.selectedSubject) {
      this.dataSource.data = this.courses.filter(c => c.subject === this.selectedSubject);
    } else {
      this.dataSource.data = this.courses;
    }
    this.dataSource.paginator = this.paginator; //reset pagination
  }

  //filter datasource (courses) according to search input field
  onSearch(): void {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

//push save course to local storage if button is clicked
  addToSaved(course: Course): void {
    //prevent duplicate
    if (!this.savedCourses.some(c => c.courseCode === course.courseCode)) {
      this.savedCourses.push(course);

      //save to localStorage
      localStorage.setItem('savedCourses', JSON.stringify(this.savedCourses));
    }
    console.log("Saved courses:", this.savedCourses);
  }
//boolean value for showing the right button when loading courses. If course is saved in local storage, button is disabled
  isCourseSaved(course: Course): boolean {
    return this.savedCourses.some(c => c.courseCode === course.courseCode);
  }
}

