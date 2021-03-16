import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {

  constructor() { }
  
  @Input() leagueList: any[] = [];
  @Output() setLeague: EventEmitter<any> = new EventEmitter();
  minimized: boolean = false;
  
  ngOnInit(): void {
  }
  selectLeague(league){
    this.setLeague.emit(league);
  }

  maximize(){
    this.minimized = false;
  }

  minimize(){
    this.minimized = true;
  }

}
