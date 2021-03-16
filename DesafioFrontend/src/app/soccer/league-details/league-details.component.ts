import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.scss']
})
export class LeagueDetailsComponent implements OnInit {

  constructor() { }

  @Input()
    set leagueInfo(value: any) {
      this._leagueInfo = value;
      this.date = this.leagueInfo.date;
    }
    get leagueInfo(): any {
      return this._leagueInfo;
    };

  @Output() setMatch: EventEmitter<any> = new EventEmitter();

  _leagueInfo: any = null;

  changingDate: boolean = false;
  date: Date;
  selectedMatch: any = {};

  ngOnInit(): void {
    this.date = new Date();
  }

  objectKeys(obj){
    return Object.keys(obj);
  }

  getInlineInfo(matchInfo){
    return `
      <div>
        <img src="${matchInfo.home.logo}" title=" "/>
          <span>${matchInfo.home.name}</span>
          <span>
            ${matchInfo.home.score} X ${matchInfo.visitors.score}
          </span>
          <span>${matchInfo.visitors.name}</span>
        <img src="${matchInfo.visitors.logo}" title=" "/>
      </div>`;
  }

  toggleChangingDate(){
    this.changingDate = !this.changingDate;
  }

  selectMatch(match){
    this.selectedMatch = match;
    this.setMatch.emit(match);
  }

}
