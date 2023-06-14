import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DtableComponent } from './dtable/dtable.component';
import { RformComponent } from './rform/rform.component';
import { TableComponent } from './table/table.component';
import { TdformComponent} from './tdform/tdform.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

const routes: Routes = [
  {path:'rform', component:RformComponent},
  {path:'dtable',component:DtableComponent},
  {path:'table',component:TableComponent},
  {path:'tdform',component:TdformComponent},
  {path:'dynamic-table',component:DynamicTableComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
