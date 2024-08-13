import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boat'
})
export class BoatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
