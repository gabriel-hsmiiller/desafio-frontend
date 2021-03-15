import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  constructor() { }

  activatedRoutePath = 'soccer';

  routes = [
    { path: 'soccer', icon: 'sports_soccer', label: 'Futebol' },
    { path: 'basketball', icon: 'sports_basketball', label: 'Basquete' },
    { path: 'football', icon: 'sports_football', label: 'Futebol Americano' },
    { path: 'equestrianism', icon: 'sports', label: 'Hipismo' },
    { path: 'boxe', icon: 'sports_mma', label: 'Boxe/MMA' },
  ]

  ngOnInit(): void {
  }

  navigate(path){
    console.log(path)
  }

  checkRoute(path){
    return path == this.activatedRoutePath;
  }
}
