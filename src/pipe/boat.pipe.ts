import { Pipe, PipeTransform } from '@angular/core';
import { BoatClass } from 'src/models/boat.model';

@Pipe({
  name: 'boat',
})
export class BoatPipe implements PipeTransform {

  transform(value: BoatClass[],search:string): BoatClass[]{
    if(!search) {
      return value;
    }
    return value.filter(p=>
      p.headlight.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }
}