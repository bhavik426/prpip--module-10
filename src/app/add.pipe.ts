import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  sum:number=0

  transform(value: any): number {
    
    for(let i of value)
    {
      this.sum+=i.marks
    }
    
    return this.sum/value.length;
  }

}
