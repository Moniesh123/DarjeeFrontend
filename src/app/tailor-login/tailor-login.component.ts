import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tailor-login',
  templateUrl: './tailor-login.component.html',
  styleUrls: ['./tailor-login.component.css']
})
export class TailorLoginComponent {

  constructor(private router : Router){}

  TailorSubmit(FormValues:any){
    console.log(FormValues);
    localStorage.setItem("TailorLoggin", "true");
    this.router.navigate(['TailorDetails']);
  }

}
