import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../../model/livro.model';

const LISTAR_LIVROS = 'http://localhost:8080/livro/buscarTodos';
const INSERIR_LIVRO = 'http://localhost:8080/livro/inserir';
const DELETAR_LIVRO = 'http://localhost:8080/livro/';
const ALTERAR_LIVRO = 'http://localhost:8080/livro/alterar';
const BUSCAR_POR_ID = 'http://localhost:8080/livro/';


@Injectable({
  providedIn: 'root'
})
export class LivroserviceService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Livro[]>{
    return this.http.get<Livro[]>(LISTAR_LIVROS);
  }

  buscarPorId(id: number): Observable<Livro>{
    return this.http.get<Livro>(BUSCAR_POR_ID + id);
  }

  inserirLivro(livro: Livro): Observable<void>{
    return this.http.post<void>(INSERIR_LIVRO, livro);
  }

  deletarLivro(id: number): Observable<void>{
    return this.http.delete<void>(DELETAR_LIVRO + id);
  }

  alterarLivro(livro: Livro): Observable<void>{
    return this.http.put<void>(ALTERAR_LIVRO, livro);
  }

}
