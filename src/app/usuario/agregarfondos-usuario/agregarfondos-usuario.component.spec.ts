import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarfondosUsuarioComponent } from './agregarfondos-usuario.component';

describe('AgregarfondosUsuarioComponent', () => {
  let component: AgregarfondosUsuarioComponent;
  let fixture: ComponentFixture<AgregarfondosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarfondosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarfondosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
