import { Component, EventEmitter, Input, Output } from '@angular/core';

type UserType = {
  id: string; 
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) user!:UserType;
  @Output() select = new EventEmitter<string>();

  imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  //imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
