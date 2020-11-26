import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoprestoComponent } from './comopresto.component';

describe('ComoprestoComponent', () => {
  let component: ComoprestoComponent;
  let fixture: ComponentFixture<ComoprestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoprestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoprestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
