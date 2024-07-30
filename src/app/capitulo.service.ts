import { Injectable } from '@angular/core';
import { CAPITULOS } from './db/capitulos';
import { Capitulo } from './db/capitulo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapituloService {

  constructor() { }

  getCapituloById(id: number): Observable<Capitulo | undefined> {
    const capitulo = CAPITULOS.find(cap => cap.id === id);
    return of(capitulo);
  }
}
