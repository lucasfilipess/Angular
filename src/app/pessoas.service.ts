import { Injectable, EventEmitter, Output } from '@angular/core';
import { Pessoas } from './pessoas/pessoas.model';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  // @Output() getPessoa: EventEmitter<any> = new EventEmitter();
  pessoasArray: Pessoas[] = [
    {
      id: 0,
      name: 'Saunders Rosa',
      idade: 23,
      corOlhos: 'brown',
      sexo: 'male',
      email: 'saundersrosa@eyewax.com',
    },
    {
      id: 1,
      name: 'Mercer Vincent',
      idade: 27,
      corOlhos: 'green',
      sexo: 'male',
      email: 'mercervincent@eyewax.com',
    },
    {
      id: 2,
      name: 'Frederick Gonzales',
      idade: 37,
      corOlhos: 'blue',
      sexo: 'male',
      email: 'frederickgonzales@eyewax.com',
    },
    {
      id: 3,
      name: 'Nicholson Frank',
      idade: 25,
      corOlhos: 'brown',
      sexo: 'male',
      email: 'nicholsonfrank@eyewax.com',
    },
    {
      id: 4,
      name: 'Cox Reeves',
      idade: 23,
      corOlhos: 'brown',
      sexo: 'male',
      email: 'coxreeves@eyewax.com',
    },
    {
      id: 5,
      name: 'Bonnie Estrada',
      idade: 35,
      corOlhos: 'green',
      sexo: 'female',
      email: 'bonnieestrada@eyewax.com',
    },
  ];

  getPessoas() {
    return this.pessoasArray;
  }

  getPessoaId(id) {
    let data = {};
    this.pessoasArray.forEach((element) => {
      if (element.id === id) {
        data = {
          id: element.id,
          name: element.name,
          idade: element.idade,
          corOlhos: element.corOlhos,
          sexo: element.sexo,
          email: element.email,
        };
      }
    });
    return data;
  }

  atualizarPessoa(data) {
    this.pessoasArray.forEach((element) => {
      if (element.id === data.id) {
        element.name = data.name;
        element.idade = data.idade;
        element.corOlhos = data.corOlhos;
        element.sexo = data.sexo;
        element.email = data.email;
      }
    });
  }

  constructor() {}
}
