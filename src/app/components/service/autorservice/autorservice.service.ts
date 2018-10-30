import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../../model/autor.model';

const LISTAR_AUTORES = 'http://localhost:8080/autor';
const LISTAR_AUTORES_POR_ID = 'http://localhost:8080/autor/';

@Injectable({
  providedIn: 'root'
})
export class AutorserviceService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Autor[]>{
    return this.http.get<Autor[]>(LISTAR_AUTORES);
  }

  buscarPorId(id: number): Observable<Autor>{
    return this.http.get<Autor>(LISTAR_AUTORES_POR_ID + id);
  }


}
