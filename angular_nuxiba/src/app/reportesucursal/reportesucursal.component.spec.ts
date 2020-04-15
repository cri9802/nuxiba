import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesucursalComponent } from './reportesucursal.component';

describe('ReportesucursalComponent', () => {
  let component: ReportesucursalComponent;
  let fixture: ComponentFixture<ReportesucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
