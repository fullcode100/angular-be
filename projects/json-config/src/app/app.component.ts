import { Component } from '@angular/core';
import { AppConfig } from 'projects/json-config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-config';
  backendUrl;

  constructor(appConfig: AppConfig) {
    this.backendUrl = appConfig.getConfig('backendUrl');
  }
}
