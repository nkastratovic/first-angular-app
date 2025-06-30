import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserType } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) user!:UserType;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  //imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
