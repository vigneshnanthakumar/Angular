import { Component } from '@angular/core';



@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {
  dts: any[]=[];
  newRow:any={};

  addRow(){
    this.dts.push(this.newRow);
    this.newRow={};
    this.newRow.name=null;
    this.newRow.email=null;
  }

  removeRow(index:number){
    this.dts.splice(index,1);
  }

}
