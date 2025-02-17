import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SoccerService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getLeagueList(){
    let url = '';
    return super.get<object[]>(url);
  }
}
