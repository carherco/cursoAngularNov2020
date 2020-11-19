import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  users: User[] = [];
  newUser: User;
  selectedUser: User | null = null;

  constructor(private userService: UserService) {
    // this.users = this.userService.getUsers();

    console.log('antes del subscribe');
    this.userService.getUsers().subscribe(
      (respuestaServidor: User[]) => {
        console.log('dentro del subscribe');
        this.users = respuestaServidor;
      }
    );
    console.log('después del subscribe');

    this.newUser = new User(11);

    console.log(this.users.length);
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
    this.userService.addUser(this.newUser);

  }

  deleteUser(user: User): void {
    this.users = this.users.filter(
      u => u.id !== user.id
    );
  }


}
