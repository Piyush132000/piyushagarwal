import { Component, DoCheck, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'Piyush Agrawal';

  constructor(){
    AOS.init({
      once:false,
      delay:200,
      duration:2000,
      mirror:true
    });
  }


 }
