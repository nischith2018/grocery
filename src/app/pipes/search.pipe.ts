import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(val, srcString: string, sortType) {
    let temp: any = [];
    if (srcString == undefined) {
      temp = val;
    } else {
      temp = val.filter((item) => item.header.toLowerCase().includes(srcString));
    }
    if (sortType == '' || sortType == undefined || sortType == null) {
      sortType = 'NameAsc';
    }
    switch (sortType) {
      case 'NameAsc':
        temp.sort(
          (a: any, b: any) => {
            if (a.header.toUpperCase() < b.header.toUpperCase()) {
              return -1;
            }
            if (a.header.toUpperCase() > b.header.toUpperCase()) {
              return 1;
            }
            if (a.header.toUpperCase() == b.header.toUpperCase()) {
              return 0;
            }
          });
        break;
      case 'NameDesc':
        temp.sort(
          (a: any, b: any) => {
            if (a.header.toUpperCase() < b.header.toUpperCase()) {
              return 1;
            }
            if (a.header.toUpperCase() > b.header.toUpperCase()) {
              return -1;
            }
            if (a.header.toUpperCase() == b.header.toUpperCase()) {
              return 0;
            }
          });
        break;
      case 'PriceAsc':
        temp.sort(
          (a: any, b: any) => { return a.amount - b.amount }
        );
        break;
      case 'PriceDesc':
        temp.sort(
          (a: any, b: any) => { return b.amount - a.amount }
        );
        break;
    }
    return temp;
  }
}