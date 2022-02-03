import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockListComponent } from './clock-list.component';

describe('ClockListComponent', () => {
  let component: ClockListComponent;
  let fixture: ComponentFixture<ClockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
