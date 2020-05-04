import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css'],
})
export class PessoasDetalheComponent implements OnInit {
  @Input() pessoa;
  @Output() atualizaPessoa: EventEmitter<any> = new EventEmitter();

  atualiza(id) {
    let data = {
      id: id,
      name: prompt('Digite o novo nome'),
      idade: prompt('Digite a nova idade'),
      corOlhos: prompt('Digite a nova cor dos olhos'),
      sexo: prompt('Digite o novo sexo'),
      email: prompt('Digite o novo email'),
    };
    this.atualizaPessoa.emit(data);
  }
  constructor(pessoasService: PessoasService) {}

  ngOnInit(): void {}
}
