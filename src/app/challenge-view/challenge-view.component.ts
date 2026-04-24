import { Component } from '@angular/core';
import { IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-challenge-view',
  imports: [IgxButtonDirective, IgxIconComponent],
  templateUrl: './challenge-view.component.html',
  styleUrls: ['./challenge-view.component.scss']
})
export class ChallengeViewComponent {}
