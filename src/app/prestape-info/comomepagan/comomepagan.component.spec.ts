import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComomepaganComponent } from './comomepagan.component';

describe('ComomepaganComponent', () => {
  let component: ComomepaganComponent;
  let fixture: ComponentFixture<ComomepaganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComomepaganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComomepaganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
