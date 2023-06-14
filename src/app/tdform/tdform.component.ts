import { Component } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TdformComponent {
  tds:any[]=[];
  newRow:any={};

  add(){
    this.tds.push(this.newRow);
    this.newRow={};
    // this.newRow.name=null;
    // this.newRow.email=null;
    // this.newRow.phone=null;
  }

  remove(index:number){
    this.tds.splice(index,1);
  }
}
