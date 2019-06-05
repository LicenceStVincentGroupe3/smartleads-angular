import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOperationsComponent } from './active-operations.component';

describe('ActiveOperationsComponent', () => {
  let component: ActiveOperationsComponent;
  let fixture: ComponentFixture<ActiveOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
