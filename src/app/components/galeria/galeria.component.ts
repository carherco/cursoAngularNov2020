import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagenes: string[] = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];
  imagenSeleccionada: string;
  indice = 0;
  width = 300;
  private intervalId: any;
  isPlaying = false;

  constructor() {
    this.imagenSeleccionada = this.imagenes[this.indice];
  }

  ngOnInit(): void {
  }

  siguiente(): void {
    this.indice += 1;
    if (this.indice >= this.imagenes.length) {
      this.indice = 0;
    }
    this.imagenSeleccionada = this.imagenes[this.indice];
  }

  anterior(): void {
    this.indice -= 1;
    this.imagenSeleccionada = this.imagenes[this.indice];
  }

  aumentar(): void {
    this.width += 50;
  }

  disminuir(): void {
    this.width -= 50;
  }

  play(): void {
    this.intervalId = setInterval( () => {
      this.siguiente();
    },  1000);
    this.isPlaying = true;
  }

  stop(): void {
    clearInterval(this.intervalId);
    this.isPlaying = false;
  }

  seleccionarImagen(indice: number): void {
    this.indice = indice;
    this.imagenSeleccionada = this.imagenes[this.indice];
  }

}
