import { Component, OnInit, Input } from '@angular/core';
// Models
import { Plant } from '@plants/services';

@Component({
  selector: 'dnd-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss'],
})
export class PlantCardComponent implements OnInit {
  @Input()
  plant: Plant;

  constructor() {}

  ngOnInit(): void {}
}
