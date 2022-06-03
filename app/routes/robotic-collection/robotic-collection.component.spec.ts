import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticCollectionComponent } from './robotic-collection.component';

describe('RoboticCollectionComponent', () => {
  let component: RoboticCollectionComponent;
  let fixture: ComponentFixture<RoboticCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboticCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
