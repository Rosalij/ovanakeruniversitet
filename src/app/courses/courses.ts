import { Component } from '@angular/core';
import { Course } from '../models/course';
import { Getcourses } from '../services/getcourses';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule, PageEvent, MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule, MatInputModule, MatPaginatorModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
    paginatedCourses: Course[] = [];

    
  //pagination
  pageSize = 20;
  pageIndex = 0;

constructor(private getCourses: Getcourses) { }

onSearch(): void {
  const term = this.searchTerm.toLowerCase();
  this.filteredCourses = this.courses.filter(course =>
    course.courseName.toLowerCase().includes(term) ||
    course.courseCode.toLowerCase().includes(term)
  );
  this.pageIndex = 0; //first page on new search
        this.updatePagination();
}

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagination();
  }

    private updatePagination(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCourses = this.filteredCourses.slice(startIndex, endIndex);
  }


ngOnInit(): void {
  this.getCourses.getCourses().subscribe((courses) => {
    this.courses = courses;
      this.filteredCourses = courses;
  });}

  

}
