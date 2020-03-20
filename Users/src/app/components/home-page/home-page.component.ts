import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {

  users = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers();
  }

}
