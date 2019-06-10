import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = ['Ford','Chevrolet','maruti'];

  myData()
  {
    return "this is my data, man!";
  }
}
