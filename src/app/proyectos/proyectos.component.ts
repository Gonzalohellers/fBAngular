import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Capitulo } from '../db/capitulo';
import { CAPITULOS } from '../db/capitulos';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})


export class ProyectosComponent {
  capitulos:Capitulo[];

  constructor(){
    this.capitulos=CAPITULOS;
  }

  toggleReadMore(capitulo: Capitulo) {
    capitulo.mostrarMas = !capitulo.mostrarMas;
  }
}
