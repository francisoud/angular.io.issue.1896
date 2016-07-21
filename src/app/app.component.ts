import { Component } from '@angular/core';
import { ContractListComponent }    from './contracts/contract-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ContractListComponent]
})
export class AppComponent {
  title = 'app works!';
}
