import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yourcourses } from './yourcourses';

describe('Yourcourses', () => {
  let component: Yourcourses;
  let fixture: ComponentFixture<Yourcourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yourcourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yourcourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
