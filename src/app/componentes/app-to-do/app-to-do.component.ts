import { Component, OnInit } from '@angular/core';
import { todo } from './../../Modelos/modelo';

@Component({
  selector: 'porque la ejecución de scripts está deshabilitada en este sistema',
  templateUrl: './app-to-do.component.html',
  styleUrls: ['./app-to-do.component.css']
})
export class AppTODOComponent implements OnInit {

  todo2!:todo[];

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

}
