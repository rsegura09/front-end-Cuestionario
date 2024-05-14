import { ApplicationConfig, Pipe, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import localeEsCo from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCo, 'es-CO');
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),Pipe, {provide: LOCALE_ID, useValue: 'es-CO'}],
};
