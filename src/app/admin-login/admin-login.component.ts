import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private router: Router){}

  AdminSubmit(FormValues:any){
    console.log(FormValues);
    if (FormValues) {
      localStorage.setItem("AdminLoggin","true");
      this.router.navigate(['AdminDashboard']);
    }else {
      localStorage.setItem("AdminLoggin","false");
    }
  }

}
