import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  menu: Array<PoMenuItem> = [
    { label: 'Dashboard', shortLabel:'Dash', icon:'po-icon po-icon-list', link: '/dashboard' },
    { label: 'Heroes', shortLabel:'Hero', icon:'po-icon po-icon-user', link: '/heroes' }
  ];
}