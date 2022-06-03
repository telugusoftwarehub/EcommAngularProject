import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorCollectionComponent } from './processor-collection.component';

describe('ProcessorCollectionComponent', () => {
  let component: ProcessorCollectionComponent;
  let fixture: ComponentFixture<ProcessorCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessorCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
