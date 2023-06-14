import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  result:any[]=[];
  constructor() { }
  GetData(){
    return [
      {name:"Vignesh", age:22, contact:6382870313, city:"Erode" },
      {name:"Nithieesh", age:23, contact:6382870314, city:"Tirupur" },
      {name:"Sakthivel", age:24, contact:6382870315, city:"Chennai" },
      {name:"Viknesh", age:25, contact:6382870316, city:"Chithode" },
      {name:"SumithaDevi", age:21, contact:6382870317, city:"Erode" },
      {name:"Swetha", age:27, contact:6382870318, city:"Namakkal" }
  ]};
}
