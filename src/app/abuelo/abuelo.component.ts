import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent implements AfterViewInit {

  nombre: string;
  apellido: string;
  viewChild: boolean = false;

  nombrePadre: string = "";
  apellidoPadre: string = "";

  mensaje: string = "";
  
  @ViewChild(PadreComponent, { static: false }) padre!: PadreComponent;

  ngAfterViewInit(): void {
    console.log('Abuelo: ngAfterViewInit');
    this.padre.sayHello();
    this.nombrePadre= this.padre.getName();
    this.apellidoPadre = this.padre.getLastName();
    this.padre.sayBye();
  }


  constructor(private changeDetectorRef: ChangeDetectorRef) {
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
      console.log('Hola, mi padre me dice que diga algo: ' + this.mensaje);
      this.sayLastName();
    }
    this.padre.diAlgo();

    this.padre.diAlgo = () => {
      console.log('Hola, mi padre me dice que diga otra cosa');
    }
    this.padre.diAlgo();
    
    this.sayBye();
  }

  togglePadreView(): void {
    this.viewChild = !this.viewChild;
    this.changeDetectorRef.detectChanges();
    this.nombrePadre ||= this.padre.getName();
    this.apellidoPadre ||= this.padre.getLastName();
  }

}
