import { Component, AfterViewInit } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit() {
    const options = {
      strings: [
        "> Hj, I´m","> Hi, I’m Max — a web developer based in Berlin, driven by a passion for blending technology and designm </br></br> > Wit",
        "> Hi, I’m Max — a web developer based in Berlin, driven by a passion for blending technology and design.</br></br> > With experience in React, Angular, and TypeScript, I also explore fields like computer vision, microprocessors, and immersive VR experiences. </br></br> > My mission is to craft web applications that don’t just function, but engage users through intuitive, design.",
        "> Hi, I’m Max — a web developer based in Berlin, driven by a passion for blending technology and design.</br></br> > With experience in React, Angular, and TypeScript, I also explore fields like computer vision, microprocessors, and immersive VR experiences. </br></br> > My mission is to craft web applications that don’t just function, but engage users through intuitive, user-centered design."

      ],
      typeSpeed: 35,
      startDelay: 1500,
      backSpeed: 55,
    smartBackspace: true,
      showCursor: false,
      cursorChar: '|',
    };
    document.getElementById('bio-text')?.classList.add('cursor-blink');
    setTimeout(()=>{
      document.getElementById('bio-text')?.classList.remove('cursor-blink');
    },1000);
    setTimeout(()=>{
      document.getElementById('bio-text')?.classList.add('cursor-blink');
    },26000);
    const typed = new Typed('#bio-text', options); 

}
}
