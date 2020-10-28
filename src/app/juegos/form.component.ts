import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public juego: Juego = new Juego();
  public title: string = 'Crear Juego';


  constructor() { }

  ngOnInit(): void {
  }

  public create(): void{
    console.log(this.juego);
  }
}
