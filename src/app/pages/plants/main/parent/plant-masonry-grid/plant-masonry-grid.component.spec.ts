import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMasonryGridComponent } from './plant-masonry-grid.component';

describe('PlantMasonryGridComponent', () => {
  let component: PlantMasonryGridComponent;
  let fixture: ComponentFixture<PlantMasonryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMasonryGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMasonryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
