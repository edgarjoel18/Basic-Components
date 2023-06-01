import { Component, Input, InputDecorator } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent {
  @Input() header = true;
  @Input() lines = 3;
  
  constructor(){

  }

  ngOnInit(){

  }

}
