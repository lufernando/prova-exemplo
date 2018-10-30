import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../../model/livro.model';
import { LivroserviceService } from '../../service/livroservice/livroservice.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  livro: Livro;
  idAlterar: number;

  constructor(
    private livroService: LivroserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.livro = new Livro();
    if(this.idAlterar){
      this.buscarPorId();
    }
  }

  buscarPorId() {
    this.livroService.buscarPorId(this.idAlterar).subscribe(livro => this.livro = livro);
  }

  inserir(): void {
    if(this.livro.id){
      this.livroService.alterarLivro(this.livro).subscribe(() => {this.livro = new Livro()
      this.router.navigateByUrl('tipo-livro/listar', {skipLocationChange: false});
    })
    }else {
      this.livroService.inserirLivro(this.livro).subscribe(() => {this.livro = new Livro()
      this.router.navigateByUrl('tipo-livro/listar', {skipLocationChange: false});
      });
    }
  }

}
