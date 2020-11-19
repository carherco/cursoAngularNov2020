import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-key-up',
  templateUrl: './key-up.component.html',
  styleUrls: ['./key-up.component.css']
})
export class KeyUpComponent implements OnInit {

  values = '';
  values2 = '';

  @ViewChild('nombre')
  variableNombre: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.variableNombre);
  }

  onKey(value: string): void {
    this.values = value;
  }

}
