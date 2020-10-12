import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptMapPageComponent } from './concept-map-page.component';

describe('ConceptMapPageComponent', () => {
  let component: ConceptMapPageComponent;
  let fixture: ComponentFixture<ConceptMapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptMapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
