import { Pipe, PipeTransform } from '@angular/core';
import { Bus } from 'src/models/bus.model';

@Pipe({
  name: 'bus',
})
export class BusPipe implements PipeTransform {

  transform(value: Bus[],search:string): Bus[]{
    if(!search) {
      return value;
    }
    return value.filter(p=>
      p.headlight.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }
}