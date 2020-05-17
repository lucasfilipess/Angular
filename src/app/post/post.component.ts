import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../../models/post.model';
import { FormsModule } from '@angular/forms';
// import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  // post: Post;

  posts: Post[];
  post: Post = {} as Post;

  async getPosts() {
    this.posts = await this.postService.get();
  }

  async handleSubmit(data) {
    await this.postService.post(data);
  }

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }
}
