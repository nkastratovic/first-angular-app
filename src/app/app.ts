import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
import { Header } from "./header/header";
import { Tasks } from './tasks/tasks';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first-angular-app';
  protected users = DUMMY_USERS;
  protected selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  OnSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
