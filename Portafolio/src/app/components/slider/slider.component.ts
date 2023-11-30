import { Component } from '@angular/core';
import {Input} from '@angular/core'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() nombre:string | undefined;

}
