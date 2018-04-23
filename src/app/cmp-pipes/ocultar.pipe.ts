import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = value;
    for (let i of args) {
      let exp = new RegExp(i, "g");
      res = res.replace(exp, '*'.repeat(i.length));
    }
    return res;
  }

}
