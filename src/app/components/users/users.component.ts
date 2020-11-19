import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/data/users';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = USERS;
  newUser: User;
  selectedUser: User | null = null;

  constructor() {
    this.newUser = new User(11);
    // this.selectedUser = new User();
  }

  ngOnInit(): void {
  }

  selectUser(user: User): void {
    this.selectedUser = { ...user };
  }

  addUser(): void {
    this.users.push(this.newUser);
    this.newUser = new User(11);
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(
      u => u.id !== user.id
    );
  }

}
