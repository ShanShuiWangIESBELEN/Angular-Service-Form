import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
})
export class NavbarComponent implements OnInit {
  username: string | null = null;

  ngOnInit() {
    this.username = localStorage.getItem('selectedEmpleado')
      ? JSON.parse(localStorage.getItem('selectedEmpleado')!).nombre
      : null;
  }
}