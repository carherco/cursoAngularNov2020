import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    // this.userId = this.route.snapshot.params['id'];
    this.user = this.userService.getUser(5);
  }

  ngOnInit(): void {
  }

  submit(): void {
    // Llamar algún método del UserService
  }

}
