import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  mostrar() {
    this.logService.mostrarEnConsola("Hola a todos");
  }

}
