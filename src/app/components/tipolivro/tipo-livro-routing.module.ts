import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroFormComponent } from './livro-form/livro-form.component';

const routes: Routes = [
  {path: 'listar', component: LivroListaComponent},
  {path: 'form', component: LivroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoLivroRoutingModule { }
