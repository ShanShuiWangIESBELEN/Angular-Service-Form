import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/Evento';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  logs: Evento[] = [];
  filterType: 'log' | 'warn' | 'error' | 'all' = 'all';

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.updateLogs();
  }

  updateLogs() {
    this.logs = this.loggerService.getFilteredLogs(this.filterType);
  }
}