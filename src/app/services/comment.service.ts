import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url: string = 'https://jsonplaceholder.typicode.com/comments';

  async get() {
    let comments = await fetch(this.url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log('Error ->', error));
    return comments;
  }

  async getById(id) {
    let comment = await fetch(`${this.url}/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log('Error ->', error));
    return comment;
  }

  async post(data: Comment) {
    let comments = await fetch(this.url, {
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
    return comments;
  }
  constructor() {}
}
