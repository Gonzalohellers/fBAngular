// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';  // Asegúrate de que routes esté importado

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};