import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantRoutingModule } from './plant-routing.module';
import { PlantComponent } from './plant/plant.component';


@NgModule({
  declarations: [
    PlantComponent
  ],
  imports: [
    CommonModule,
    PlantRoutingModule
  ]
})
export class PlantModule { }
