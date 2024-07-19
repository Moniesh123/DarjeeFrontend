import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private typedTextSpan!: HTMLElement;
  private cursorSpan!: HTMLElement;

  private textArray: string[] =
    [
      "Your Fashion Journey Starts Now!",
      "Tailor your style with us!",
      "Discover your one-of-a-kind style with our expert !",
      "Crafting Elegance, Tailoring Excellence!"
    ];
  private colorArray: string[] = ["yellow", "#00ff00", "#0000ff", "pink"]; // Array of colors
  private typingDelay: number = 100;
  private erasingDelay: number = 50;
  private newTextDelay: number = 1000;
  private textArrayIndex: number = 0;
  private charIndex: number = 0;


  ngOnInit() {
    this.typedTextSpan = document.querySelector(".typed-text")!;
    this.cursorSpan = document.querySelector(".cursor")!;
  
    if (this.textArray.length) {
      setTimeout(() => this.type(), this.newTextDelay + 250);
    }
  }
  
  private type() {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      if (!this.cursorSpan.classList.contains("typing")) {
        this.cursorSpan.classList.add("typing");
      }
      this.typedTextSpan.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
      this.typedTextSpan.style.color = this.colorArray[this.textArrayIndex]; // Set color
      this.charIndex++;
      setTimeout(() => this.type(), this.typingDelay);
    } else {
      this.cursorSpan.classList.remove("typing");
      setTimeout(() => this.erase(), this.newTextDelay);
    }
  }
  
  private erase() {
    if (this.charIndex > 0) {
      if (!this.cursorSpan.classList.contains("typing")) {
        this.cursorSpan.classList.add("typing");
      }
      this.typedTextSpan.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.erase(), this.erasingDelay);
    } else {
      this.cursorSpan.classList.remove("typing");
      this.textArrayIndex++;
      if (this.textArrayIndex >= this.textArray.length) {
        this.textArrayIndex = 0;
      }
      setTimeout(() => this.type(), this.typingDelay + 1100);
    }
  }

}
