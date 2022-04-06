import { Pipe, PipeTransform } from '@angular/core';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

@Pipe({
  name: 'randomId'
})
export class RandomIdPipe implements PipeTransform {

  transform(value: number): number {
    console.log('Get random id')
    return fibonacci(value);
  }

}
