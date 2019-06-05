import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMonitoringComponent } from './performance-monitoring.component';

describe('PerformanceMonitoringComponent', () => {
  let component: PerformanceMonitoringComponent;
  let fixture: ComponentFixture<PerformanceMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
