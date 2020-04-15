import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteempleadoComponent } from './reporteempleado.component';

describe('ReporteempleadoComponent', () => {
  let component: ReporteempleadoComponent;
  let fixture: ComponentFixture<ReporteempleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteempleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
