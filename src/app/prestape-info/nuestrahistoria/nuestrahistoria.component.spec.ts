import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrahistoriaComponent } from './nuestrahistoria.component';

describe('NuestrahistoriaComponent', () => {
  let component: NuestrahistoriaComponent;
  let fixture: ComponentFixture<NuestrahistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrahistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrahistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
