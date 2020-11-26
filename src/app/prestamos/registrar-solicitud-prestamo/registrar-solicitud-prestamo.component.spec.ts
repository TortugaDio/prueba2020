import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSolicitudPrestamoComponent } from './registrar-solicitud-prestamo.component';

describe('RegistrarSolicitudPrestamoComponent', () => {
  let component: RegistrarSolicitudPrestamoComponent;
  let fixture: ComponentFixture<RegistrarSolicitudPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSolicitudPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSolicitudPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
