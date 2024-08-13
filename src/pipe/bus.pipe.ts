import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bus'
})
export class BusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
