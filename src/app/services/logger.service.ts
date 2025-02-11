import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logs: { message: string; type: 'log' | 'warn' | 'error' }[] = [];
  countLog = 0;
  countWarn = 0;
  countError = 0;

  constructor() { }

  log(msg: string) {
    console.log(msg);
    this.logs.push({ message: msg, type: 'log' });
    this.countLog++;
    this.showCounts();
  }

  error(msg: string) {
    console.error(msg);
    this.logs.push({ message: msg, type: 'error' });
    this.countError++;
    this.showCounts();
  }

  warn(msg: string) {
    console.warn(msg);
    this.logs.push({ message: msg, type: 'warn' });
    this.countWarn++;
    this.showCounts();
  }

  showCounts() {
    console.log(`Logs: ${this.countLog}, Warnings: ${this.countWarn}, Errors: ${this.countError}`);
  }

  getEvents() {
    console.log("Eventos almacenados:", this.logs);
    return this.logs;
  }

  getFilteredLogs(type: 'log' | 'warn' | 'error' | 'all') {
    if (type === 'all') {
      return this.getEvents();
    }
    return this.getEvents().filter(log => log.type === type);
  }

}
