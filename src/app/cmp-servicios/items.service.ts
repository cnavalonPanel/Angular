import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ItemsService {
  emitirEvento;
  items: Array<string>;
  constructor(private logService: LogService) {
    this.items = ['Item 1', 'Item 2', 'Item 3'];
    this.emitirEvento = new EventEmitter<string>();
  }

  getItems() {
    return this.items;
  }

  emitirMensaje(mensaje) {
    this.emitirEvento.emit(mensaje);
  }

  guardarItem(item) {
    this.logService.mostrarEnConsola('Se ha guardado el item: ' + item);
    this.items.push(item);
  }

}
