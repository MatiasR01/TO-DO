import { Component, OnInit } from '@angular/core';
import { todo } from '../../Modelos/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  todo2!:todo[];

  inputTodo:string = "";
  constructor() { }

  ngOnInit(): void {
    this.todo2=[
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }


    ]
  }

  toggleDone (id:number) {
    this.todo2.map((v,i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  } 

  addTodo () {
    this.todo2.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
}
