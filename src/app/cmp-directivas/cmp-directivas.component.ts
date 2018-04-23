import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  colorLetra: string;
  mascota: string;
  centrado: boolean;
  mostrar: boolean;
  items: Array<string>;
  constructor() {
    this.items = ["Item 1", "Item 2", "Item 3"];
    this.mascota = 'canario';
    this.colorLetra = 'blue';
    this.centrado = true;
    this.mostrar = true;
  }

  cambiarMostrar() {
    this.mostrar = !this.mostrar;
  }

  ngOnInit() {
  }

  centrar() {
    this.centrado = !this.centrado;
  }

  getStyles() {
    return {
      color: this.colorLetra,
      backgroundColor: 'yellow'
    };
  }

}
