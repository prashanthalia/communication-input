import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdataComponent } from './getdata/getdata.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
 { path:'', component:GetdataComponent},
 {path: '**',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
