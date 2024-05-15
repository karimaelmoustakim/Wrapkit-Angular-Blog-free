import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAbscenceComponent } from './form-abscence.component';

describe('FormAbscenceComponent', () => {
  let component: FormAbscenceComponent;
  let fixture: ComponentFixture<FormAbscenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAbscenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
