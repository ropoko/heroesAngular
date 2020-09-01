import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoNotificationService, PoToasterOrientation } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  screenLock: any;

  menu: Array<PoMenuItem> = [
    { label: 'Dashboard', shortLabel: 'Dash', icon: 'po-icon po-icon-list', link: '/dashboard' },
    { label: 'Heroes', shortLabel: 'Hero', icon: 'po-icon po-icon-user', link: '/heroes' }
  ];

  constructor(private notification: PoNotificationService) { }

  ngOnInit() {
    this.Loading();
  }

  Loading() {
    const message = 'A página foi carregada com sucesso!';

    setTimeout(() => {
      this.screenLock = true;
      this.notification.success(message)
      this.notification.setDefaultDuration(500)
    }, 1500);
  }
}
