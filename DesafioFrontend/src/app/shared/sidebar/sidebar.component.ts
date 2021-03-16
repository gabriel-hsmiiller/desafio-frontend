import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  constructor(private _router: Router, private _route: ActivatedRoute) { }

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
    this._router.navigate([`../${path}`], {relativeTo: this._route});
    this.activatedRoutePath = path;
  }

  checkRoute(path){
    return path == this.activatedRoutePath;
  }
}
