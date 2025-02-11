import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  logs: { message: string; type: 'log' | 'warn' | 'error'; timestamp?: Date }[] = [];
  filterType: 'log' | 'warn' | 'error' | 'all' = 'all';

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.updateLogs();
  }

  updateLogs() {
    this.logs = this.loggerService.getFilteredLogs(this.filterType);
  }
}


/* @Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  logs = [];

  constructor(private loggerService: LoggerService) {
  }
  ngOnInit() {
    this.logs = this.loggerService.getEvents();
  } */