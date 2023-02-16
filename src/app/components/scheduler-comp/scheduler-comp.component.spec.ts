import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerCompComponent } from './scheduler-comp.component';

describe('SchedulerCompComponent', () => {
  let component: SchedulerCompComponent;
  let fixture: ComponentFixture<SchedulerCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
