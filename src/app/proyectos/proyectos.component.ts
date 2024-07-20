import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Capitulo {
  img: string;
  titulo: string;
  texto: string;
  mostrarMas: boolean;
}
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})


export class ProyectosComponent {
  capitulos: Capitulo[] = [
    {
      img: 'https://i.ytimg.com/vi/mIyhvFQJF-0/hqdefault.jpg?sqp=-oaymwE9CNACELwBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYciBUKEIwDw==&rs=AOn4CLBOFna0MI28YMSe4ImTcgftWQN8gg',
      titulo: 'Capitulo 3 - El Cassete',
      texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum autem, ab perferendis unde aperiam numquam officia quasi tempora quia consequatur! Rem commodi reprehenderit numquam nihil itaque sequi pariatur totam error?',
      mostrarMas: false
    },
    {
      img: 'https://i.ytimg.com/vi/rbT2PLxSPl0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCsPo9xwtrUBE28VoUqDUIbwYetSw',
      titulo: 'Capitulo 4 - La Revelacion',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero necessitatibus, dolorem ea porro ex saepe omnis culpa, aspernatur ab delectus debitis. Consectetur aut placeat perspiciatis, pariatur ut aliquam temporibus.',
      mostrarMas: false
    },
    {
      img: 'https://i.ytimg.com/vi/Uc1-jZM2aU4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA6aPOKnSAtun44SkwElV43DWorWA',
      titulo: 'Capitulo 5 - La Herencia',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum odit sequi doloremque, at unde doloribus necessitatibus quae hic aliquid? Hic dolores fugit sit iusto libero sed dolor repellendus error.',
      mostrarMas: false
    },
    {
      img: 'https://i.ytimg.com/vi/Yk2cqnnW2Og/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDEIVleiobVGhNeGib_UaBDmfaWiA',
      titulo: 'Capitulo 6 - The Signals',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestiae quas ducimus fugiat possimus ipsa. Reprehenderit, laboriosam. Unde itaque illo, pariatur accusantium, provident dicta autem, velit laborum sint veritatis doloribus!',
      mostrarMas: false
    }
  ];

  toggleReadMore(capitulo: Capitulo) {
    capitulo.mostrarMas = !capitulo.mostrarMas;
  }
}
