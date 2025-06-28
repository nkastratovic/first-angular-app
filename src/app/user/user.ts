import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  //avatar = input.required<string>(); 
  //name = input.required<string>(); 
  @Output() select = new EventEmitter<string>();

  imagePath() {
    return `assets/users/${this.avatar}`;
  }

  //imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.id);
  }
}
