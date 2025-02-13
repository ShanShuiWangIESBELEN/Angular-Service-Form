import { Injectable } from '@angular/core';
import { Evento } from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private eventos: Evento[] = [];

  addEvento(evento: Evento): void {
    this.eventos.push(evento);
    console.log('Evento registrado:', evento);
  }

  getEventos(): Evento[] {
    return this.eventos;
  }

  getEventosFiltrados(tipo: 'log' | 'warn' | 'error' | 'all'): Evento[] {
    if (tipo === 'all') {
      return this.getEventos();
    }
    return this.eventos.filter(evento => evento.type === tipo);
  }
  getFilteredLogs(tipo: 'log' | 'warn' | 'error' | 'all') {
    if (tipo === 'all') {
      return this.getEventos();
    }
    return this.getEventos().filter(evento => evento.type === tipo);
  }

}
