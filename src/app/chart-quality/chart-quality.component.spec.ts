import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQualityComponent } from './chart-quality.component';

describe('ChartQualityComponent', () => {
  let component: ChartQualityComponent;
  let fixture: ComponentFixture<ChartQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
