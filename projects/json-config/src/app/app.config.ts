import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class AppConfig {

  private config: Object;

  constructor(private http: HttpClient) {}

  public getConfig(key: any) {
    return this.config[key];
  }

  public load() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.production ? 'config.json' : 'assets/config.json').pipe(
        catchError(error => {
          console.error('Configuration file could not be found');
          reject(error);
          return error;
        })).subscribe(config => {
          this.config = config;
          resolve();
        });
    });
  }
}
