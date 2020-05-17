import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://jsonplaceholder.typicode.com/users';

  async get() {
    let users = await fetch(this.url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log('Error ->', error));

    return users;
  }

  async getById(id) {
    let user = await fetch(`${this.url}/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log('Error ->', error));

    return user;
  }

  async post(data: User) {
    let user = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log('Error ->', error));
    return user;
  }

  constructor() {}
}
