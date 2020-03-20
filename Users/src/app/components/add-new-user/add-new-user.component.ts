import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddUserComponent implements OnInit {

  name: string;
  email: string;
  age: string;
  gender: string;
  userinfo: string;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  addUser($event: Event) {
    const newUser = {
      name: this.name,
      age: this.age,
      email: this.email,
      gender: this.gender,
      userinfo : this.userinfo
    };
    this.usersService.addUser(newUser);
  }
}
