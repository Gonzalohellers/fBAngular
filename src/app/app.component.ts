import { Component } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routes';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, InicioComponent, ProyectosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flownBrolly';
  menu:boolean = false;

  abrirMenu(): void {
    if (this.menu) {
      this.menu = false;
    }
    else {
      this.menu = true;
    }
  }
}


