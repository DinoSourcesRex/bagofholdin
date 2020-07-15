// Angular
import { Injectable } from '@angular/core';
// Rxjs
import { Observable, of } from 'rxjs';
// Models
import { Plant } from '../models';
// Data
import { PlantsData } from '../plants.data';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  getAllPlants(): Observable<Plant[]> {
    return of(PlantsData.plants);
  }
}
