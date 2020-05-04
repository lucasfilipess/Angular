import { Component, OnInit, Output } from '@angular/core';
import { Pessoas } from './pessoas.model';
import { PessoasService } from '../pessoas.service';
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css'],
})
export class PessoasComponent implements OnInit {
  // @Output
  pessoaId = {};
  // pessoas;
  detalhePessoa = false;
  pessoasArray: Pessoas[] = [];

  handleGetPessoaId(id) {
    this.detalhePessoa = true;
    this.pessoaId = this.pessoasService.getPessoaId(id);
  }
  handleAtualizaPessoa(data) {
    console.log('Chamou ->', data);

    this.pessoasService.atualizarPessoa(data);
  }

  alterarPessoa(id, nome) {}
  constructor(private pessoasService: PessoasService) {}

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
  }
}
