import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private formbuilder:FormBuilder, private route : Router  ){}

  // login
  LoginForm(LoginData:any){
    if (LoginData) {
      localStorage.setItem("LogginData", "true");
    }
    this.route.navigate(['/'])
    console.log(LoginData);
  }
  
  forgetpwdlink(){
    this.resetpwd=true;
  }

  // routing
  signup:any=false;
  resetpwd:any=false;

  signupbtn(){
    this.signup=true;
  }

  Loginbtn(){
    this.signup=false;
  }

  // reset pwd
  ResetPassword(resetdata:any){

  }

  // signup
  SignupForm(signupdata:any){
    console.log(signupdata);
    
  }

}
