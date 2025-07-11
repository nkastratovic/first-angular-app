import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Card } from "../../shared/card/card";
import { TaskEntity } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true }) task!: TaskEntity;
  @Output() completed = new EventEmitter<string>();

  onComplete() {
    this.completed.emit(this.task.id);
  }
}