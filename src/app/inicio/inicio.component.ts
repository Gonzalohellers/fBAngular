import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as Aos from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  ngOnInit():void{
  Aos.init();
}
}
