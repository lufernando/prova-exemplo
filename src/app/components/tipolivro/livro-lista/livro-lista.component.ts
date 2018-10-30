import { Component, OnInit } from '@angular/core';
import { LivroserviceService } from '../../service/livroservice/livroservice.service';
import { Livro } from '../../model/livro.model';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  livros: Array<Livro>;
  constructor(
    private livroService: LivroserviceService
  ) { }

  ngOnInit() {
    this.getListaDeLivros();

  }

  getListaDeLivros() {
    this.livroService.buscarTodos().subscribe(livros => this.livros = livros);
  }

  deletarLivro(id: number) {
    this.livroService.deletarLivro(id).subscribe(() => this.ngOnInit());
  }

}
