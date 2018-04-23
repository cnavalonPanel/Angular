import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective {

  defaultColor: string;
  @Input('appMarcar') colorMarcado: string;
  @HostBinding('style.backgroundColor') colorFondo: string;
  constructor(private elemRef: ElementRef) {
    this.defaultColor = 'white';
    this.colorMarcado = 'green';
    // elemRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.colorMarcado;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = this.defaultColor;
  }

}
