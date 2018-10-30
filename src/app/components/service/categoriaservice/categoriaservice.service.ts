import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../../model/categoria.model';

const LISTAR_CATEGORIAS = 'http://localhost:8080/categoria';
const BUSCAR_POR_ID = 'http://localhost:8080/categoria/';

@Injectable({
  providedIn: 'root'
})
export class CategoriaserviceService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(LISTAR_CATEGORIAS);
  }

  buscarPorId(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(BUSCAR_POR_ID);
  }
}
