import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorsCollectionsComponent } from './sensors-collections.component';

describe('SensorsCollectionsComponent', () => {
  let component: SensorsCollectionsComponent;
  let fixture: ComponentFixture<SensorsCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorsCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
