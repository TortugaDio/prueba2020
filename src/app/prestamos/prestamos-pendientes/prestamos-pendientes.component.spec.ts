import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosPendientesComponent } from './prestamos-pendientes.component';

describe('PrestamosPendientesComponent', () => {
  let component: PrestamosPendientesComponent;
  let fixture: ComponentFixture<PrestamosPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamosPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
