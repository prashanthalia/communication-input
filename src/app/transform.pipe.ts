import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(items: any, Search: any): any {
    if(!items) return [];
    if(!Search) return items;
  return items.filter(a=>{return a.fullname.toLowerCase().includes(Search.toLowerCase())})  }
}
