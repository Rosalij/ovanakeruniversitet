import { TestBed } from '@angular/core/testing';

import { Getcourses } from './getcourses';

describe('Getcourses', () => {
  let service: Getcourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getcourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
