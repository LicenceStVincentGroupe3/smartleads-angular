import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchieveOperationsComponent } from './achieve-operations.component';

describe('AchieveOperationsComponent', () => {
  let component: AchieveOperationsComponent;
  let fixture: ComponentFixture<AchieveOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchieveOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchieveOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
