import { Component } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  template: `
    <mat-card>
      <mat-card-tittle>Suppliers</mat-card-tittle>
      <router-outlet></router-outlet>
    </mat-card>
  `,
  styles: [
  ]
})
export class SuppliersComponent {

}
