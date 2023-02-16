import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPartComponent } from './timer-part.component';

describe('TimerPartComponent', () => {
  let component: TimerPartComponent;
  let fixture: ComponentFixture<TimerPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
