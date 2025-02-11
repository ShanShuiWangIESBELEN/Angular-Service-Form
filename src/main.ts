import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { LoggerService } from './app/services/logger.service';


bootstrapApplication(AppComponent, {
  providers: [
    LoggerService, // Registra el servicio globalmente
    provideRouter([]) // Configura las rutas aquí si las tienes
  ]
}).catch(err => console.error(err));