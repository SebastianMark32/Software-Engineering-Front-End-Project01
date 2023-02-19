import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayakComponent } from './kayak.component';

describe('KayakComponent', () => {
  let component: KayakComponent;
  let fixture: ComponentFixture<KayakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KayakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KayakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
