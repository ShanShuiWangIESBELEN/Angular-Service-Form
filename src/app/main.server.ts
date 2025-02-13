import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from '../app/app.component';
const config = appConfig;
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;