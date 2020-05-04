import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { DatasComponent } from './datas/datas.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';
import { PessoasService } from './pessoas.service';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    DatasComponent,
    EnderecoComponent,
    PessoasComponent,
    PessoasDetalheComponent,
  ],
  imports: [BrowserModule],
  providers: [PessoasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
