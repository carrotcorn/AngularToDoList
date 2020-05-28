import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: string;
  todoArray = [];

  onClick(){
    this.todoArray.push({name: this.todo});
    this.todo = '';
  }
  onDelete(i){
    this.todoArray.splice(i, 1);
    this.todo = '';
  }

}
