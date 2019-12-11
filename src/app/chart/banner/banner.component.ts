import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
two =[]
  constructor(private ser:ServiceService) { }

  ngOnInit() {
   
    this.two=this.ser.getone();  
    

  }

}
