import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Capitulo } from '../db/capitulo';
import { CapituloService } from '../capitulo.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})

export class ProyectoComponent implements OnInit {
  capitulo: Capitulo | undefined;
  id:number=0;
  safeUrl: SafeResourceUrl='';

  constructor(
    private route: ActivatedRoute,
    private capituloService: CapituloService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
   
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.id=id;
      this.getCapitulo(id);
    } else {
      console.error('Invalid ID');
    }
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getCapitulo(id: number): void {
    this.capituloService.getCapituloById(id).subscribe(
      capitulo => {
        if (capitulo) {
          this.capitulo = capitulo;
          this.safeUrl = this.sanitizeUrl(capitulo.url);
        } else {
          console.error('Capitulo not found');
        }
      },
      error => console.error('Error fetching capitulo:', error)
    );
  }
}
