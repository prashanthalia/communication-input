import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharedfolder/service.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  result: any;
  data;
  constructor(private https:ServiceService) { }

  ngOnInit() {
    this.getData();
  }
  
  getData(){
    //debugger;
    this.https.fetch().subscribe(res=>{
      console.log(res);
      this.result=res;
    });
  }
  info(w){
    this.data=w
  }
}
