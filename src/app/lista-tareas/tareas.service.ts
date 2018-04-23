export class TareasService {

  tareas: any;
  constructor() {
    this.tareas = [];
  }

  getTareas() {
    return this.tareas;
  }

  addTarea(newTarea) {
    this.tareas.push(newTarea);
  }

  updateTarea(pos, hecha) {
    this.tareas[pos].hecha = !hecha;
  }

  deleteTarea(pos) {
    this.tareas.splice(pos, 1);
  }
}
