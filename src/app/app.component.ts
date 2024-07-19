import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  OnActivate(){
    window.scroll(0, 0);
  }

  constructor (){
    // localStorage.setItem("LogginData", "false");
    localStorage.setItem("AdminLoggin", "false");
    localStorage.setItem("TailorLoggin", "false");
  }

}
