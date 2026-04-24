import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES } from 'igniteui-angular';

@Component({
  selector: 'app-profile-view',
  imports: [IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES],
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  public foundItemsListSelectedItem?: string;
}
