import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Foto } from '../interface/foto';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  private apiUrl = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image';

  constructor(private http: HttpClient) { }

  getFotos(): Observable<Foto[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.collection.items as Foto[])
    );
  }
}