// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LayoutComponent } from './parent/layout/layout.component';
import { PlantDetailComponent } from './parent/plant-detail/plant-detail.component';
import { PlantFilterComponent } from './parent/plant-filter/plant-filter.component';
import { PlantMasonryGridComponent } from './parent/plant-masonry-grid/plant-masonry-grid.component';
// Third Party
import { NgxMasonryModule } from 'ngx-masonry';
import { PlantCardComponent } from './child/plant-card/plant-card.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    PlantCardComponent,
    PlantDetailComponent,
    PlantFilterComponent,
    PlantMasonryGridComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES), NgxMasonryModule],
})
export class MainModule {}
