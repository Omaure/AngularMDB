import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  id = 0;
  users = [];

  constructor() {
  }

  addUser(user): any {
    this.id++;
    user.id = this.id;
    this.users.push(user);
  }

  getAllUsers(): any {
    return this.users;
  }

  getUserById(id): any {
    function userFilter(user) {
      // tslint:disable-next-line:triple-equals
      return user.id == id;
    }

    return this.users.filter(userFilter)[0];
  }

  deleteUserById(id: number): void {
    const idx = this.users.indexOf(this.getUserById(id));
    this.users.splice(idx, 1);
  }

  editUser(id: number, user: { email: string; name: string; age: string; gender: string; userinfo: string; }): void {
    const index = this.users.indexOf(this.getUserById(id));
    this.users[index].id = id;
    this.users[index].name = user.name;
    this.users[index].email = user.email;
    this.users[index].age = user.age;
    this.users[index].gender = user.gender;
    this.users[index].userinfo = user.userinfo;
  }
}
