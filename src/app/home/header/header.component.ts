import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @ViewChild('drawer', { static: false })  drawer: ElementRef | undefined;
  @Input() title :string ="Piyush Agrawal";
  drawerShow: boolean = false;
  drawerEnabled:boolean = false;
  constructor( private render: Renderer2, private el: ElementRef) { }


  toggleDrawer(){
    this.drawerEnabled = true;
    this.drawerShow = !this.drawerShow;
  }


}
