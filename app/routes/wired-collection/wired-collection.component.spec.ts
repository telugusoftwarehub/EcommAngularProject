import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiredCollectionComponent } from './wired-collection.component';

describe('WiredCollectionComponent', () => {
  let component: WiredCollectionComponent;
  let fixture: ComponentFixture<WiredCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiredCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiredCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
