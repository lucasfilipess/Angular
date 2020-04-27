import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  evento = {
    name: 'PHP Conference',
    date: '6/30/2020',
    time: '10am',
    location: { address: 'UniBH ', city: 'Belo Horizonte', country: 'Brasil' },
  };

  eventos = [
    {
      name: 'Villa Mix',
      date: '9/26/2020',
      time: '10am',
      location: {
        address: 'Mineirão ',
        city: 'Belo Horizonte',
        country: 'Brasil',
      },
    },
    {
      name: 'Rock In Rio',
      date: '4/15/2020',
      time: '9am',
      onlineUrl: 'https://www.rockinrio.com.br/',
    },
    { name: 'Campus Party', date: '6/10/2020', time: '8am' },
    {
      name: 'Loolapalooza',
      date: '4/15/2020',
      time: '9am',
      onlineUrl: 'http://www.loolapalooza.com',
    },
    {
      name: 'Samba Prime',
      date: '6/10/2020',
      time: '8am',
      location: {
        address: 'Expominas',
        city: 'Belo Horizonte',
        country: 'Brasil',
      },
      onlineUrl: 'http://www.sambaprime.com.br',
    },
  ];

  receberEnderecoAtualizado(evento) {
    for (let i = 0; i < this.eventos.length; i++) {
      if (this.eventos[i].name === evento.name) {
        this.eventos[i].name = evento.name;
        this.eventos[i].location.address = evento.address;
        this.eventos[i].location.city = evento.city;
        this.eventos[i].location.country = evento.country;
      }
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
