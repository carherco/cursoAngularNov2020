import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  nombre: string;

  persona = {
    nombre: 'Carlos',
    apellido: 'Herrera'
  };

  bgColor = 'red';
  numero = 4;
  exponente = 3;

  constructor() {
    this.nombre = 'Carlos';
    setTimeout( () => {
      this.nombre = 'Marta';
      this.persona.nombre = 'Diego';
    }, 5000 );

  }

  ngOnInit(): void {
  }

  // Query Function
  nombreCompleto(): string {
    return this.persona.nombre + ' ' + this.persona.apellido;
  }

  // Command Function
  cambiarNombre(event: MouseEvent): void {
    console.log(event);
    this.nombre = 'Adrián';
  }

  // cambiarNombreDesdeInput(event: KeyboardEvent): void {
  //   console.log(event);
  //   this.nombre = (event.target as HTMLInputElement).value;
  // }

  cambiarNombreDesdeInput(name: string): void {
    console.log(name);
    this.nombre = name;
  }


}
