import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  template: `
    <div *ngIf="visible" style="display:flex; justify-content: center; align-items: center;background:white;">
      <mat-progress-spinner color="primary" mode="indeterminate">
      </mat-progress-spinner>
    </div>
  `,
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent {
  @Input() visible: Boolean = false;
}
