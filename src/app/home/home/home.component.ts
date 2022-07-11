import { Component, } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  downloadResume(){
    window.open("./assets/images/resume.pdf");
  }

}
