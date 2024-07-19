import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent {

  constructor(private service: CommonService, private router :Router ) { }

  values: any;
  responseData: any;
  city: any;
  state: any;

  fetchDataOnInput(data: any) {
    this.service.getData(data).subscribe((res) => {
      this.values = data;
      this.responseData = res;

      if (this.responseData && this.responseData.length > 0) {
        this.city = this.responseData[0]?.PostOffice[0]?.Block || '';
        this.state = this.responseData[0]?.PostOffice[0]?.State || '';
      }
    },
      (error) => {
        console.error('Error fetching data:', error);
      });

  }

  inputField: any;
  ngOnInit() {
    // Method to check conditions and blank out the input fields
    if (this.values == '') {
      this.inputField = '';
    }
  }

  AdressSubmitForm(Formvalue: any) {
    console.log(Formvalue);
  }

  Redirecting(){
    setTimeout(() => {
      this.router.navigate(['CheckOutProduct']);
    }, 2000);
  }

  


}
