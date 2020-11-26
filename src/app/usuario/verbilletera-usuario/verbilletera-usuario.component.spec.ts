import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbilleteraUsuarioComponent } from './verbilletera-usuario.component';

describe('VerbilleteraUsuarioComponent', () => {
  let component: VerbilleteraUsuarioComponent;
  let fixture: ComponentFixture<VerbilleteraUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbilleteraUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbilleteraUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
