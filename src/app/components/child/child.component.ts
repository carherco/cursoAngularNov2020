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

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(): void {
    this.eliminarEvent.emit(this.user);
  }



}
