import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
title='CustomerTable';
tables=[
  { id:1, name:'Vignesh', age:22},
  { id:2, name:'Nithieesh', age:23},
  { id:3, name:'Sakthivel', age:25},
  { id:4, name:'Manoj', age:26},
  { id:5, name:'SumithaDevi', age:21}
  ];

  removeTable(index:number){
    // this.tables.filter(table=>table.id !== id);
    this.tables.splice(index,1);
    this.tables.forEach((data,index)=>{
      console.log(data.id=index+1);
    
    
      
    })
  //  this.tables= this.tables.slice(0,index).concat(this.tables.slice(index+1));
  };
  
}
