// app.component.ts
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('parallaxImg') parallaxImg: ElementRef;

  ngAfterViewInit() {
    // Inicialización después de que la vista haya sido cargada
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrolled = window.scrollY;
    
    // Ajusta el factor de desplazamiento parallax
    const offset = scrolled * 0.5;
    
    // Aplica el desplazamiento
    this.parallaxImg.nativeElement.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
  }
}