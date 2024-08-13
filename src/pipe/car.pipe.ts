import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'car'
})
export class CarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
