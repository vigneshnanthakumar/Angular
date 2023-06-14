import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { FormsModule } from '@angular/forms';
import { RformComponent } from './rform/rform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TdformComponent } from './tdform/tdform.component';
import { DtableComponent } from './dtable/dtable.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DynamicTableComponent,
    RformComponent,
    TdformComponent,
    DtableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
