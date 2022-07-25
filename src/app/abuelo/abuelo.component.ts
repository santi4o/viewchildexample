import { Component, OnInit, ViewChild } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent implements OnInit {

  nombre: string;
  apellido: string;

  metodoPadre1: () => void = (): void => {};
  metodoPadre2: () => void = (): void => {};
  
  @ViewChild(PadreComponent, { static: true }) padre!: PadreComponent;
  
  ngAfterViewInit() {
     this.padre.sayHello();
     this.metodoPadre1 = this.padre.getName;
     this.metodoPadre2 = this.padre.getLastName;
     this.padre.sayBye();
  }

  constructor() {
    this.nombre = 'Juan';
    this.apellido = 'Perez';
  }

  ngOnInit(): void {
  }

  public sayHello(): void {
    console.log('Hola, soy el abuelo');
  }

  public sayBye(): void {
    console.log('Adios, soy el abuelo');
  }

  public sayName(): void {
    console.log('Hola, soy el abuelo, mi nombre es ' + this.nombre);
  }

  public sayLastName(): void {
    console.log('Hola, soy el abuelo, mi apellido es ' + this.apellido);
  }

  public mandarPadre(): void {
    this.padre.diAlgo = () => {
      console.log('Hola, mi padre me dice que diga algo');
      this.sayLastName();
    }
    this.padre.diAlgo();

    this.padre.diAlgo = () => {
      console.log('Hola, mi padre me dice que diga otra cosa');
    }
    this.padre.diAlgo();
    
    this.sayBye();
  }

}
