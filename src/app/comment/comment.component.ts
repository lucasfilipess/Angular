import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../../models/comment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() id;

  comment: Comment;

  comments: Comment[];

  async getComments() {
    this.comments = await this.commentService.get();
  }
  async getCommentsById(id) {
    this.comments = await this.commentService.getById(id);
  }

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.getComments();
  }
}
