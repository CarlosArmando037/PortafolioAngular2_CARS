import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatosApiService {
  private apikey="tu_api_key";
  constructor(private http: HttpClient){}

  getcat():Observable<any>{
    return this.http.get<any>('https://api.thecatapi.com/v1/images/search',{
      headers:{
        "x-api-key":this.apikey
      }
    });
  }

  /*
  private ApiGatos = "https://dog.ceo/api/breeds/image/random";
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.ApiGatos);
  }*/
}
