import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogearseComponent } from './logearse.component';

describe('LogearseComponent', () => {
  let component: LogearseComponent;
  let fixture: ComponentFixture<LogearseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogearseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogearseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
