import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('parallaxImg') parallaxImg?: ElementRef;

  ngAfterViewInit() {
    // Initialization after the view has been loaded
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.parallaxImg) {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      let porcentaje = 0; // Use let to declare the variable only once

      // Adjust the percentage based on the window width
      if (windowWidth > 1400) {
        porcentaje = windowHeight / 5;
      } 
      
      else {
        porcentaje = 0;
      }

      // Adjust the parallax scroll factor
      const offset = scrolled * 1;

      if (scrolled < windowHeight - porcentaje) {
        // Apply the parallax transform
        this.parallaxImg.nativeElement.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
      }
    }
  }
}