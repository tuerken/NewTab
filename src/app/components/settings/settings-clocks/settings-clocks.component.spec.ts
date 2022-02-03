import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsClocksComponent } from './settings-clocks.component';

describe('SettingsClocksComponent', () => {
  let component: SettingsClocksComponent;
  let fixture: ComponentFixture<SettingsClocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsClocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsClocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
