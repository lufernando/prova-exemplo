import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa.model';
import { PessoaService } from '../../service/pessoaservice/pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-pessoa-list',
  templateUrl: './tipo-pessoa-list.component.html',
  styleUrls: ['./tipo-pessoa-list.component.css']
})
export class TipoPessoaListComponent implements OnInit {

  pessoas: Array<Pessoa>;
  pessoa: Pessoa;
  

  constructor(
    private service: PessoaService
    ) { }
  
  ngOnInit() {
    this.pessoa = new Pessoa;
    this.getLista();
  }

  getLista(){
    this.service.buscarTodos().subscribe(pessoasRecebidas => this.pessoas = pessoasRecebidas);
  }

  deletarPessoa(cpf: string){
    this.service.deletarBanco(cpf).subscribe(() => this.getLista);
  }

}
