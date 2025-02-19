import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
})
export class NavbarComponent implements OnInit {
  username: string | null = null;

  ngOnInit() {
    this.loadUsername();
  }

  private loadUsername() {
    try {
      const empleado = localStorage.getItem('selectedEmployee');
      this.username = empleado ? empleado : 'Usuario no identificado';
    } catch (error) {
      console.error('Error al leer el empleado desde localStorage', error);
      this.username = 'Usuario no identificado';
    }
  }
}
