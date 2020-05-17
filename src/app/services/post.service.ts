import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  async get() {
    let posts = await fetch(this.url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log('Error ->', error));
    return posts;
  }

  async getById(id) {
    let post = await fetch(`${this.url}/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log('Error ->', error));
    return post;
  }

  async post(data: Post) {
    let posts = await fetch(this.url, {
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
    return posts;
  }

  constructor() {}
}
