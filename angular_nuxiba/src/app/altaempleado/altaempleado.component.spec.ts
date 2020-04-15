import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaempleadoComponent } from './altaempleado.component';

describe('AltaempleadoComponent', () => {
  let component: AltaempleadoComponent;
  let fixture: ComponentFixture<AltaempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
