import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';

@Component({
  selector: 'app-find-item-challenge-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, FormsModule],
  templateUrl: './find-item-challenge-view.component.html',
  styleUrls: ['./find-item-challenge-view.component.scss']
})
export class FindItemChallengeViewComponent {
  public value?: string;
}
