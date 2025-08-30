import { ChangeDetectorRef, Component } from '@angular/core';
import { Course } from '../models/course';
import { Getcourses } from '../services/getcourses';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-courses',
  imports: [MatSelectModule, CommonModule, FormsModule, MatInputModule, MatPaginatorModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';
  paginatedCourses: Course[] = [];
  subjects: string[] = [];
  selectedSubject: string = '';

  //pagination
  pageSize = 20;
  pageIndex = 0;

  constructor(private getCourses: Getcourses,
    private cdr: ChangeDetectorRef//for angular to detect changes right away
  ) { }

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

    //tells Angular to refresh the view right away, not wait for a new event
    this.cdr.detectChanges();
  }


  onSubjectChange(): void {
  if (this.selectedSubject) {
    this.filteredCourses = this.courses.filter(course =>
      course.subject === this.selectedSubject
    );
  } else {
    this.filteredCourses = this.courses; //reset if no subject selected
  }

  this.pageIndex = 0;
  this.updatePagination();
}


  ngOnInit(): void {
    this.getCourses.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
      //get unique subjects for dropdown filter
      this.subjects = [...new Set(courses.map(c => c.subject))];

      //Update pagination 
      this.pageIndex = 0;
      this.pageSize = 20;
      this.updatePagination();
    });
  }
}
