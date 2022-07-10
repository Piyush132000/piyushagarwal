import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
})
export class HomeMainComponent implements OnInit {
  @ViewChild('animator', { static: false }) animator: ElementRef | undefined;
  titleArray = ['Web Developer.', 'Tech Enthusiast.', 'Programmer.'];
  interval = 0;
  textArr: string[] = [];
  maxTextIndex = 0;
  span:any;
  sPerChar: number = 0.15;
  sBetweenWord: number = 1.5;
  textIndex: number = 0;
  constructor(private render: Renderer2) {}

  ngOnInit(): void {
   this.span = document.querySelector('.typewriter span');
    this.render = this.animator?.nativeElement;
    this.textArr = [...this.titleArray];
    this.maxTextIndex = this.textArr.length;
    this.typing(this.textIndex, this.textArr[this.textIndex]);
  }

  typing(textIndex: number, text: string) {
    var charIndex = 0;
    var maxCharIndex = text.length - 1;

    var typeInterval = setInterval(()=> {
      this.span.innerHTML += text[charIndex];
      if (charIndex == maxCharIndex) {
        clearInterval(typeInterval);
        setTimeout(()=> { this.deleting(textIndex, text) }, this.sBetweenWord * 1000);
      } else {
        charIndex += 1;
      }
    }, this.sPerChar * 1000);
  }

  deleting(textIndex:number, text:string) {
      var minCharIndex = 0;
      var charIndex = text.length - 1;

      var typeInterval = setInterval(()=> {
          this.span.innerHTML = text.substr(0, charIndex);
          if (charIndex == minCharIndex) {
              clearInterval(typeInterval);
              textIndex + 1 == this.maxTextIndex ? textIndex = 0 : textIndex += 1;
              setTimeout(()=> { this.typing(textIndex, this.textArr[textIndex]) }, this.sBetweenWord * 1000);
          } else {
              charIndex -= 1;
          }
      }, this.sPerChar * 1000);
  }
}
