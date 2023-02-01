import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';


@Component({
  selector: 'app-menu',
  template: `
    <mat-toolbar>Menu</mat-toolbar>
    <mat-nav-list>
      <a mat-list-item *ngFor="let item of menuItems" [href]="item.path">{{item.label}}</a>
    </mat-nav-list>
  `,
  styles: [
  ]
})
export class MenuComponent {
  menuItems: Array<MenuItem> = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/categories',
      label: 'Categories'
    },
    {
      path: '/suppliers',
      label: 'Suppliers'
    }
  ]
}
