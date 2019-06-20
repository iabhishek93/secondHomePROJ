import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(placesname:any[],searchTerm: string) {
    if(!placesname || !searchTerm)
      return placesname;

    searchTerm=searchTerm.toLowerCase();

    return placesname.filter(result=>{
       return result.toLowerCase().includes(searchTerm);
    });



  }

}
