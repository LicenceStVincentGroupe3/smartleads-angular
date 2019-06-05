import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMonitoringChartComponent } from './performance-monitoring-chart.component';

describe('PerformanceMonitoringChartComponent', () => {
  let component: PerformanceMonitoringChartComponent;
  let fixture: ComponentFixture<PerformanceMonitoringChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceMonitoringChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMonitoringChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
