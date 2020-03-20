import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  name: string;
  email: string;
  age: string;
  gender: string;
  userinfo: string;
  constructor(private router: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    const user = this.usersService.getUserById(this.router.snapshot.paramMap.get('id'));
    // console.log(user);
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.age = user.age;
    this.gender = user.gender;
    this.userinfo = user.userinfo;
  }

  editUser($event: MouseEvent): void {
    const user = {
      name: this.name,
      email: this.email,
      age: this.age,
      gender: this.gender,
      userinfo: this.userinfo
    };

    this.usersService.editUser(this.id, user);
  }
}
