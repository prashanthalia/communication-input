import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { GetdataComponent } from './getdata/getdata.component';
import { ViewComponent } from './view/view.component';
import {TableModule} from 'primeng/table';
import { TransformPipe } from './transform.pipe';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    GetdataComponent,
    ViewComponent,
    TransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,TableModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
