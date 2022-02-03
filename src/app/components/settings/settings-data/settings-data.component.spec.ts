import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDataComponent } from './settings-data.component';

describe('SettingsDataComponent', () => {
  let component: SettingsDataComponent;
  let fixture: ComponentFixture<SettingsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
