import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  display: string;
  result: string;

  constructor() { }
@Input() details;
  ngOnInit() {
  }

}
