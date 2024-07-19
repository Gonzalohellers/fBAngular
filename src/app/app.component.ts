import { Component } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routes';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,AboutUsComponent, InicioComponent, ProyectosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flownBrolly';
}
