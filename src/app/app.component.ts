import { Component } from '@angular/core';
import {C7zEmptyComponent} from './empty/empty.component';

@Component({
  selector: 'app-root',
  imports: [C7zEmptyComponent],
  template: '<c7z-empty/>',
})
export class AppComponent {
  title = 'angular-19-1';
}
