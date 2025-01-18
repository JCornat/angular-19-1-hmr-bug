import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {C7zEmptyComponent} from './empty/empty.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, C7zEmptyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-1';
}
