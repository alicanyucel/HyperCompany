import { Pipe, PipeTransform } from '@angular/core';
import { CarClass } from 'src/models/car.model';

@Pipe({
  name: 'car',
})
export class CarPipe implements PipeTransform {

  transform(value: CarClass[],search:string):CarClass[]{
    if(!search) {
      return value;
    }
    return value.filter(p=>
      p.headlight.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }
}