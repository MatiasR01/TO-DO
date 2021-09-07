import { Component, OnInit } from '@angular/core';
import { todo } from './../../Modelos/modelo';

@Component({
  selector: 'app-to-do',
  templateUrl: './app-to-do.component.html',
  styleUrls: ['./app-to-do.component.css']
})
export class AppTODOComponent implements OnInit {

  todo2!:todo[];

  input:string = "";
  
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

  añadir () {
    this.todo2.push({
      content: this.input,
      completed: false
    });

    this.input = "";
  }
}
