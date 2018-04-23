import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  @Input() nombre: string;
  apellido: string;
  deshabilitar: boolean;
  @Output('unEvento') miEvento;
  
  constructor() {
    this.miEvento = new EventEmitter<string>();
    this.nombre = "Angel";
    this.apellido = "Villalba";
    this.deshabilitar = true;
  }

  ngOnInit() {
  }

  habilitarEdicion() {
    this.deshabilitar = !this.deshabilitar;
    this.miEvento.emit(`Se ha ${this.deshabilitar ? 'deshabilitado' : 'habilitado'} la edición.`);
  }

  nombreCompleto () {
    return this.nombre + ' ' + this.apellido;
  }

  cambiarNombreCompleto(nombreCompleto) {
    let nombreYApellido = nombreCompleto.split(" ");
    this.nombre = nombreYApellido.shift();
    this.apellido = nombreYApellido.join(' ');
  }

}






