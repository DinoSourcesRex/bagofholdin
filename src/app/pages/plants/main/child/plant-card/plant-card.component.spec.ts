import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantCardComponent } from './plant-card.component';
// Models
import { Plant } from '@plants/services';

describe('PlantCardComponent', () => {
  let component: PlantCardComponent;
  let fixture: ComponentFixture<PlantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlantCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantCardComponent);
    component = fixture.componentInstance;

    component.plant = {
      name: 'test name',
      locations: [],
    } as Plant;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
