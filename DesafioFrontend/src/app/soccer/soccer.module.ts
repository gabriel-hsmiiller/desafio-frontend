import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

import { MatchDetailsComponent } from './match-details/match-details.component';
import { LeagueListComponent } from './league-list/league-list.component';
import { LeagueDetailsComponent } from './league-details/league-details.component';
import { SoccerRoutingModule } from './soccer-routing.module';
import { SoccerComponent } from './soccer.component';


registerLocaleData(localeBr, 'pt')

@NgModule({
  declarations: [
    SoccerComponent,
    MatchDetailsComponent, 
    LeagueListComponent, 
    LeagueDetailsComponent, 
  ],
  imports: [
    CommonModule,
    SoccerRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class SoccerModule { }
