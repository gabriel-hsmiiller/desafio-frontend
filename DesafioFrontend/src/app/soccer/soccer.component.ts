import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { SoccerService } from '../services/soccer.service';
import { LeagueDetailsComponent } from './league-details/league-details.component';
import { LeagueListComponent } from './league-list/league-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss']
})
export class SoccerComponent implements OnInit {

  constructor(
    private _soccerService: SoccerService
  ) { }

  @ViewChild(LeagueListComponent) leagueListComponent: LeagueListComponent;
  @ViewChild(LeagueDetailsComponent) leagueDetailsComponent: LeagueDetailsComponent;
  @ViewChild(MatchDetailsComponent) matchDetailsComponent: MatchDetailsComponent;

  leagueList = [
    { 
      image: '', 
      name: 'Premiere',
      date: '2021-03-16 19:00:00',
      matches: [
        {
          live: true, 
          time: 53, 
          date: '2021-03-16 19:00:00',
          local: 'Estádio Santiago Bernabèu',
          info: {
            home: {
              name: 'Barcelona',
              logo: '',
              score: 2,
              goals: 3,
              yellows: 6,
              reds: 1,
              penalties: 3,
              shoots: 11,
              rebounds: 7,
              subs: 3,
              utilization: 22.3,
              ballPoss: 51.3,
            },
            visitors: {
              name: 'Real Madrid',
              logo: '',
              score: 1,
              goals: 4,
              yellows: 9,
              reds: 3,
              penalties: 1,
              shoots: 15,
              rebounds: 6,
              subs: 6,
              utilization: 31.6,
              ballPoss: 48.6,
            }
          } 
        },
      ],
    },
    { 
      image: '', 
      name: 'Libertadores',
      date: '2021-03-16 19:00:00',
      matches: [
        {
          live: true, 
          time: 53, 
          date: '2021-03-16 19:00:00',
          local: 'Estádio Santiago Bernabèu',
          info: {
            home: {
              name: 'Barcelona',
              logo: '',
              score: 2,
              goals: 3,
              yellows: 6,
              reds: 1,
              penalties: 3,
              shoots: 11,
              rebounds: 7,
              subs: 3,
              utilization: 22.3,
              ballPoss: 51.3,
            },
            visitors: {
              name: 'Real Madrid',
              logo: '',
              score: 1,
              goals: 4,
              yellows: 9,
              reds: 3,
              penalties: 1,
              shoots: 15,
              rebounds: 6,
              subs: 6,
              utilization: 31.6,
              ballPoss: 48.6,
            }
          } 
        },
      ],
    },
    { 
      image: '', 
      name: 'Budesliga',
      date: '2021-03-16 19:00:00',
      matches: [
        {
          live: false, 
          time: null, 
          date: '2021-03-16 19:00:00',
          local: 'Estádio Santiago Bernabèu',
          info: {
            home: {
              name: 'Barcelona',
              logo: '',
              score: 2,
              goals: 3,
              yellows: 6,
              reds: 1,
              penalties: 3,
              shoots: 11,
              rebounds: 7,
              subs: 3,
              utilization: 22.3,
              ballPoss: 51.3,
            },
            visitors: {
              name: 'Real Madrid',
              logo: '',
              score: 1,
              goals: 4,
              yellows: 9,
              reds: 3,
              penalties: 1,
              shoots: 15,
              rebounds: 6,
              subs: 6,
              utilization: 31.6,
              ballPoss: 48.6,
            }
          } 
        },
      ],
    },
    { 
      image: '', 
      name: 'UEFA - Champions League',
      date: '2021-03-16 19:00:00',
      matches: [
        {
          live: false, 
          time: null, 
          date: '2021-03-16 19:00:00',
          local: 'Estádio Santiago Bernabèu',
          info: {
            home: {
              name: 'Barcelona',
              logo: '',
              score: 2,
              goals: 3,
              yellows: 6,
              reds: 1,
              penalties: 3,
              shoots: 11,
              rebounds: 7,
              subs: 3,
              utilization: 22.3,
              ballPoss: 51.3,
            },
            visitors: {
              name: 'Real Madrid',
              logo: '',
              score: 1,
              goals: 4,
              yellows: 9,
              reds: 3,
              penalties: 1,
              shoots: 15,
              rebounds: 6,
              subs: 6,
              utilization: 31.6,
              ballPoss: 48.6,
            }
          } 
        },
      ],
    },
  ];

  selectedLeague = {};
  selectedMatch = {};

  ngOnInit(): void {
  }

  selectLeague(league){
    this.selectedLeague = league;
  }

  selectMatch(match){
    this.selectedMatch = match;
  }
  
  objectKeys(obj){
    return Object.keys(obj);
  }

}
