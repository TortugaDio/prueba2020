import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPrestatariosComponent } from './listado-prestatarios.component';

describe('ListadoPrestatariosComponent', () => {
  let component: ListadoPrestatariosComponent;
  let fixture: ComponentFixture<ListadoPrestatariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPrestatariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPrestatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
