import { TestBed } from '@angular/core/testing';

import { Savedcourses } from './savedcourses';

describe('Savedcourses', () => {
  let service: Savedcourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Savedcourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
