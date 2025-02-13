import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { Evento } from '../../models/Evento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  eventos: Evento[] = [];
  eventosFiltrados: Evento[] = [];

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.eventos = this.loggerService.getEventos();
    this.eventosFiltrados = [...this.eventos];
  }
  /* No me funcionaba en select una cosa y la alternativa de IA es que lo haga declarando la variable como un elemento de HTML */
  filtrarEventos(event: Event): void {
    const filtro = (event.target as HTMLSelectElement).value;
    this.eventosFiltrados = filtro === 'all'
      ? [...this.eventos]
      : this.loggerService.getEventosFiltrados(filtro as 'log' | 'warn' | 'error');
  }
}
