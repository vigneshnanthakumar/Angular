import { Component } from '@angular/core';

interface Row{
  name:string;
  email:string;
  editMode:boolean;
}


@Component({
  selector: 'app-dtable',
  templateUrl: './dtable.component.html',
  styleUrls: ['./dtable.component.scss']
})
export class DtableComponent {
  dts:Row[]=[];
  newRow:Row={
    name:'',
    email:'',
    editMode:false
  };

  add(){
    this.dts.push({...this.newRow});
    this.newRow.name='';
    this.newRow.email='';
  }

  remove(index:number){
    this.dts.splice(index,1);
  }

  edit(dt:Row){
    dt.editMode=!dt.editMode;
  }
}
