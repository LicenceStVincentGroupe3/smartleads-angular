import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsChartComponent } from './operations-chart.component';

describe('OperationsChartComponent', () => {
  let component: OperationsChartComponent;
  let fixture: ComponentFixture<OperationsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
