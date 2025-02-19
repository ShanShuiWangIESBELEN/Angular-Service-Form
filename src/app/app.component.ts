import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ServiceForm';

  // npm install -g json-server
  // json-server --watch db.json

  /* npx concurrently "ng serve" "json-server --watch db.json" */
  /* npm install concurrently --save-dev */
}