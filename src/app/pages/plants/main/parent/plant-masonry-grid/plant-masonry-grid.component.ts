import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// Services
import { PlantService } from '@plants/services/plant/plant.service';
import { Plant } from '@plants/services/models';
// Third party
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'dnd-plant-masonry-grid',
  templateUrl: './plant-masonry-grid.component.html',
  styleUrls: ['./plant-masonry-grid.component.scss'],
})
export class PlantMasonryGridComponent implements OnInit {
  allPlants: Observable<Plant[]>;

  masonryOptions: NgxMasonryOptions = {
    gutter: 10, // The horizontal space between elements
    animations: {},
  };

  constructor(service: PlantService) {
    this.allPlants = service.getAllPlants();
  }

  ngOnInit(): void {}
}
