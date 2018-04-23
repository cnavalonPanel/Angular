import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {

  colores: Array<string>;
  @HostBinding('style.color') color: string;
  @HostBinding('style.marginTop') marginTop: string;
  @HostBinding('style.marginLeft') marginLeft: string;

  constructor() {
    this.colores = ['yellow', 'orange', 'red', 'blue', 'green', 'black'];
    this.marginTop = '0px';
    this.marginLeft = '0px';
  }

  @HostListener('input') onInput () {
    this.color = this.colores[Math.floor(Math.random() * this.colores.length)];
    this.marginTop = '6px';
    this.marginLeft = '4px';
    setTimeout(() => {
      this.marginTop = '0px';
      this.marginLeft = '0px';
    }, 100);
  }

}
