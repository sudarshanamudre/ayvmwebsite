import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemetogglebuttonComponent } from './themetogglebutton.component';

describe('ThemetogglebuttonComponent', () => {
  let component: ThemetogglebuttonComponent;
  let fixture: ComponentFixture<ThemetogglebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemetogglebuttonComponent]
    });
    fixture = TestBed.createComponent(ThemetogglebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
