import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { SoccerComponent } from './soccer.component';

const routes: Routes = [
  { path: '', component: SoccerComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SoccerRoutingModule { }
