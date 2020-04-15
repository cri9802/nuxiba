import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasucursalComponent } from './altasucursal.component';

describe('AltasucursalComponent', () => {
  let component: AltasucursalComponent;
  let fixture: ComponentFixture<AltasucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltasucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltasucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
