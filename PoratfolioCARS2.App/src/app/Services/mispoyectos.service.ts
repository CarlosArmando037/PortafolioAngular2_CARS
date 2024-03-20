import { Injectable } from '@angular/core';
import { proyectosModel } from '../Models/MisProyectosModel';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ProyectosService {

  url='Misproyectos';

  constructor(private http: HttpClient) { }

  // public getDriver():Observable<Driver[]>{
  //   return this.http.get<Driver[]>(`${environment.apiUrl}/${this.url}`);
  // }
  public getDriver():Observable<proyectosModel[]>{
    return this.http.get<proyectosModel[]>(`${environment.apiUrl}`+this.url);
  }
}
