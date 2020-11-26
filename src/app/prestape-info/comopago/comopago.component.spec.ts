import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComopagoComponent } from './comopago.component';

describe('ComopagoComponent', () => {
  let component: ComopagoComponent;
  let fixture: ComponentFixture<ComopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComopagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
