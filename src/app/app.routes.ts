// app.routes.ts
import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const routes: Routes = [  // Asegúrate de exportar routes
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: InicioComponent },
  { path: "equipos", component: AboutUsComponent },
  { path: "proyectos", component: ProyectosComponent }
];