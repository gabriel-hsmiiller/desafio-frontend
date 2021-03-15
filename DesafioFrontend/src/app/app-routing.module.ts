import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'soccer', pathMatch: 'full' },
  { path: 'soccer', loadChildren: () => import('./soccer/soccer.module').then(m => m.SoccerModule) },
  { path: 'basketball', loadChildren: () => import('./basketball/basketball.module').then(m => m.BasketballModule) },
  { path: 'football', loadChildren: () => import('./football/football.module').then(m => m.FootballModule) },
  { path: 'equestrianism', loadChildren: () => import('./equestrianism/equestrianism.module').then(m => m.EquestrianismModule) },
  { path: 'boxe', loadChildren: () => import('./boxe/boxe.module').then(m => m.BoxeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
