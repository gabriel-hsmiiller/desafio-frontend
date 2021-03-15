import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { LeagueListComponent } from './league-list/league-list.component';
import { LeagueDetailsComponent } from './league-details/league-details.component';
import { SoccerRoutingModule } from './soccer-routing.module';
import { SoccerComponent } from './soccer.component';



@NgModule({
  declarations: [MatchDetailsComponent, LeagueListComponent, LeagueDetailsComponent, SoccerComponent],
  imports: [
    CommonModule,
    SoccerRoutingModule
  ]
})
export class SoccerModule { }
