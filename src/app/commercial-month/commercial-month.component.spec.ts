import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialMonthComponent } from './commercial-month.component';

describe('CommercialMonthComponent', () => {
  let component: CommercialMonthComponent;
  let fixture: ComponentFixture<CommercialMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
