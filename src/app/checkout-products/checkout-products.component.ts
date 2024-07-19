import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css'],
})
export class CheckoutProductsComponent {

  constructor(private router : Router){}

  AdressConfirm01: boolean = true;
  PaymentConfirm02: boolean = false;
  DetailConfirm03: boolean = false;

  ProgressSteper1() {
    this.AdressConfirm01 = true;
    this.PaymentConfirm02 = false;
    this.DetailConfirm03 = false;
  }
  AddressNextBtn() {
    this.AdressConfirm01 = false;
    this.PaymentConfirm02 = !this.PaymentConfirm02;
  }
  GotoPaymentOption() {
    setTimeout(() => {
      this.AdressConfirm01 = false;
      this.PaymentConfirm02 = true;
      this.DetailConfirm03 = false;
    }, 2000);
  }
  ProgressSteper2() {
    this.AdressConfirm01 = false;
    this.PaymentConfirm02 = true;
    this.DetailConfirm03 = false;
  }
  confirmPayment() {
    this.AdressConfirm01 = false;
    this.PaymentConfirm02 = false;
    this.DetailConfirm03 = true;
  }
  PaymentOptionprev() {
    this.AdressConfirm01 = true;
    this.PaymentConfirm02 = false;
    this.DetailConfirm03 = false;
  }
  PaymentOptionnext2() {
    this.DetailConfirm03 = true;
    this.AdressConfirm01 = false;
    this.PaymentConfirm02 = false;
  }
  Paymentnext() {
    this.AdressConfirm01 = false;
    this.PaymentConfirm02 = false;
    this.DetailConfirm03 = true;
  }
  ProgressSteper3() {
    this.DetailConfirm03 = true;
    this.AdressConfirm01 = false;
    this.PaymentConfirm02 = false;
  }
  ConfirmOrderPrev() {
    this.AdressConfirm01 = false;
    this.PaymentConfirm02 = true;
    this.DetailConfirm03 = false;

  }


  // upi form
  PaymentDetails(upivalues: any) {
    console.log(upivalues);
  }

  shiftingtodetailpage() {
    setTimeout(() => {
      this.AdressConfirm01=false;
      this.PaymentConfirm02=false;
      this.DetailConfirm03 = true;
    }, 2000);
  }

  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  checkbox4: boolean = false;
  checkbox5: boolean = false;
  atLeastOneChecked: boolean = false;

  updateButtonState() {
    this.atLeastOneChecked = this.checkbox2 || this.checkbox1 || this.checkbox3 || this.checkbox4 || this.checkbox5;
  }

  // address upadate

  AdressUpdateForm(updateform:any){
    console.log(updateform);
    
  }
  Redirecting(){
    this.router.navigate(['CheckOutProduct']);
  }

}
