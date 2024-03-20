import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
@Injectable({
  providedIn: 'root'
})

export class gatosApi{
    constructor(private http: HttpClient) { }

    obtenerGato(): Observable<string> {
      return this.http.get<{ message: string, status: string }>('https://dog.ceo/api/breeds/image/random')
        .pipe(map(response => response.message)
        );
    }
}
*/