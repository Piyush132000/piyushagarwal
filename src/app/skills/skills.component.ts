import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  images: any[] = [
    { img: './assets/images/js.png', animation: 'slid-up' },
    { img: './assets/images/angular1.png', animation: 'slide-down' },
    { img: './assets/images/icons8-git-100.png', animation: 'slid-up' },
    { img: './assets/images/icons8-typescript.png', animation: 'slide-down' },
    {
      img: './assets/images/icons8-react-native-100.png',
      animation: 'slid-up',
    },
  ];
}
