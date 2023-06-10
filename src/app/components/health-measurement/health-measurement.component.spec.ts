import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMeasurementComponent } from './health-measurement.component';

describe('HealthMeasurementComponent', () => {
  let component: HealthMeasurementComponent;
  let fixture: ComponentFixture<HealthMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthMeasurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
