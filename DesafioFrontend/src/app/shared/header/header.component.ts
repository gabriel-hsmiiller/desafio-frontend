import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user = {
    id: 0,
    name: 'Gabriel Miiller',
    profilePicture: '',
    hasNotifications: true,
    notifications: [
      { title: '', text: '', id: 0 }
    ],
  }

  showNotificationsList = false;
  showMoreOptions = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNotificationsList(){
    this.showNotificationsList = !this.showNotificationsList;
  }

  toggleMoreOptions(){
    this.showMoreOptions = !this.showMoreOptions;
  }

  createNoProfile(name: string){
    let r = '';
    let arr = name.split(" ");
    r = r.concat(arr[0].slice(0,1)).concat(arr[arr.length-1].slice(0,1));

    return r;
  }

}
