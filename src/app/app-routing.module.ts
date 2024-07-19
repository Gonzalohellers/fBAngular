import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [  // Asegúrate de exportar routes
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: InicioComponent },
  { path: "equipos", component: AboutUsComponent },
  { path: "proyectos", component: ProyectosComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
