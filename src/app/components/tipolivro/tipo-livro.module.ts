import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoLivroRoutingModule } from './tipo-livro-routing.module';
import { FormsModule } from '@angular/forms';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

@NgModule({
  imports: [
    CommonModule,
    TipoLivroRoutingModule,
    FormsModule
  ],
  declarations: [LivroFormComponent, LivroListaComponent]
})
export class TipoLivroModule { }
