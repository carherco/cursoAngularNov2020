import { Injectable } from '@angular/core';
import { USERS } from '../data/users';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.api_url + 'users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  // getUsers(): User[] {
  //   return USERS;
  // }

  getUser(id: number): User {
    return USERS[id - 1];
  }

  addUser(user: User): void {

  }
}
