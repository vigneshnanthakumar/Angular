import { Component } from '@angular/core';
import { NewService } from './services/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'App';
  news:any[]=[];
  constructor(view:NewService){
    this.news=view.GetData();
  }
  
}
