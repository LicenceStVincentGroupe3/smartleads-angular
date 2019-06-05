import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancemapComponent } from './francemap.component';

describe('FrancemapComponent', () => {
  let component: FrancemapComponent;
  let fixture: ComponentFixture<FrancemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrancemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrancemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
