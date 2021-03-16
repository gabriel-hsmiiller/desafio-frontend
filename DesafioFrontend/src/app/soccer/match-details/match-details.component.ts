import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  constructor() { }

  @Input() 
    set matchInfo (value) {
      this._matchInfo = value;
    }
    get matchInfo() {
      return this._matchInfo;
    }

  get home(){
    return this.matchInfo.info.home;
  }

  get visitors(){
    return this.matchInfo.info.visitors;
  }
  
  _matchInfo: any;

  ngOnInit(): void {
  }

  objectKeys(obj){
    return Object.keys(obj);
  }
}
