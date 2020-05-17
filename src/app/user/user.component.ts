import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;
  users: User[] = [];

  async getUsers() {
    this.users = await this.userService.get();
  }
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
}
