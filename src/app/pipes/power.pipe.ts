import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'power',
  pure: true
})
export class PowerPipe implements PipeTransform {

  transform(base: number, exponente: number): number {
    console.log('Hola');
    return base ** exponente;
  }

}
