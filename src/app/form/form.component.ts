import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '../data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  name:string;
  contactedby:string;
  email:string;
  mobile_number:number;
  projectType:string;
  Description:string;
  deliveryTime:string;
  projectDeliveryOptions:string[] = ['1 Month to 3 Month','3 Month to 6 Month','6 Month to 1 Year'];

  

  ngOnInit(): void {
  }

  
  Submit(form:NgForm)
  {
    console.log(form.value.name);
    console.log(form.value.company);
    console.log(form.value.email);
    console.log(form.value.phone);
    console.log(form.value.project_detail);
    console.log(form.value.budget);
  }

  onChange(deviceValue) {
    this.deliveryTime = deviceValue;
}

}
