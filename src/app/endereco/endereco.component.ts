import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css'],
})
export class EnderecoComponent implements OnInit {
  @Input() endereco;
  @Output() atualizaEndereco: EventEmitter<any> = new EventEmitter();

  atualiza() {
    let data = {
      name: 'Villa Mix',
      address: 'Mineirinho',
      city: 'Belo Horizonte',
      country: 'Brasil',
    };
    this.atualizaEndereco.emit(data);
  }
  constructor() {}

  ngOnInit(): void {}
}
