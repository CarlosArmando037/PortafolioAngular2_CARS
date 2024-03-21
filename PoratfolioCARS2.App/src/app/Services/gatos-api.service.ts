import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatosApiService {
  private ApiGatos = "https://dog.ceo/api/breeds/image/random";
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.ApiGatos);
  }
}
