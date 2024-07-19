import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router : Router){}

  home(){
    // window.addEventListener('load', () => {
      this.router.navigate(['/']);
      // Reload the page
      window.location.reload();
    // });
  }


  NotificationHide:boolean=false;

  NotificationShow(){
    this.NotificationHide=!this.NotificationHide;
  }

}
