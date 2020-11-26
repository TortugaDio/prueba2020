import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialPrestamosComponent } from './historial-prestamos.component';

describe('HistorialPrestamosComponent', () => {
  let component: HistorialPrestamosComponent;
  let fixture: ComponentFixture<HistorialPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialPrestamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
