import { Component } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  template: `
    <mat-card>
      <mat-card-title>Suppliers</mat-card-title>
      <router-outlet></router-outlet>
    </mat-card>
  `,
  styles: [
  ]
})
export class SuppliersComponent {

}
