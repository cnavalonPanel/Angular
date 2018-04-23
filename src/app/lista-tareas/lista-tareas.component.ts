import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: Array<object>;
  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.tareas = this.tareasService.getTareas();
  }

  guardar(nombre) {
    this.tareasService.addTarea({ nombre: nombre, hecha: false });
  }

  eliminar(pos) {
    this.tareasService.deleteTarea(pos);
  }
  
  actualizar(pos, hecha) {
    this.tareasService.updateTarea(pos, hecha);
  }

}
