import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPrestamistasComponent } from './listado-prestamistas.component';

describe('ListadoPrestamistasComponent', () => {
  let component: ListadoPrestamistasComponent;
  let fixture: ComponentFixture<ListadoPrestamistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPrestamistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPrestamistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
