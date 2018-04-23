import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  num: number;
  mascotas: Array<string>;
  texto: string;
  fecha: Date;
  mensaje;

  constructor() {
    this.num = 4.67628;
    this.texto = 'Un texto';
    this.mascotas = ['Gato', 'Perro', 'Canario'];
    this.fecha = new Date(2000, 3, 13);
    this.mensaje = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('un mensaje muy importante...');
      }, 2000);
    });
  }

  addMascota(nuevaMascota) {
    this.mascotas.push(nuevaMascota);
  }

  ngOnInit() {
  }

}
