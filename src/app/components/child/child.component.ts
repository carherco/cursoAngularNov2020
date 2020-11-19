import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  eliminarEvent: EventEmitter<User> = new EventEmitter();

  constructor() {
    console.log(this.user); // <- undefined
  }

  ngOnInit(): void {
    console.log(this.user); // <- el valor que venga por input
  }

  eliminar(): void {
    this.eliminarEvent.emit(this.user);
  }



}
