import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  nombre: string;
  apellido: string;

  diAlgo: any;

  constructor() {
    this.nombre = 'Pedro';
    this.apellido = 'Sanchez';
  }

  ngOnInit(): void {
  }

  public sayHello(): void {
    console.log('Hola, soy el padre');
  }

  public sayBye(): void {
    console.log('Adios, soy el padre');
  }

  public getName(): string {
    return this.nombre;
  }

  public getLastName(): string {
    return this.apellido;
  }

}
