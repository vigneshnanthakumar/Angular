import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss']
})
export class RformComponent {
  tableForm:FormGroup;
     rows:any[]=[];

     constructor(private formBuilder:FormBuilder){
      this.tableForm=this.formBuilder.group({
        name:['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        age:['', Validators.required],
        phone:['', Validators.required],
        gender:['', Validators.required]
      });
    }
    


    
    add(){
      if(this.tableForm.valid){
        const newRow=this.tableForm.value;
        this.rows.push(newRow);
        this.tableForm.reset();
      }
    }
    // edit(index:number){
    //   this.tableForm=Object.assign({}, this.rows[index]);
    //   this.remove(index);
    // }
    remove(index:number){
      this.rows.splice(index,1);
    }
    
}

