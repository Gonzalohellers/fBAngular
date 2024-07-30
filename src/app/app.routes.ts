// app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { UnirseComponent } from './unirse/unirse.component';

export const routes: Routes = [  // Asegúrate de exportar routes
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: 'proyectos/:id', component: ProyectoComponent },
  { path: 'home', component: InicioComponent },
  { path: "proyectos", component: ProyectosComponent },
  {path:"unirse", component:UnirseComponent}
];