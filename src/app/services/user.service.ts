import { Injectable } from '@angular/core';
import { USERS } from '../data/users';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

  addUser(user: User): void {

  }
}
