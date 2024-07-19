import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tailor-view',
  templateUrl: './tailor-view.component.html',
  styleUrls: ['./tailor-view.component.css']
})
export class TailorViewComponent {

  constructor(private router : Router){}

  RedirectToTailorsProfile(){
    this.router.navigate(['/TailorIg']);
  }

}
