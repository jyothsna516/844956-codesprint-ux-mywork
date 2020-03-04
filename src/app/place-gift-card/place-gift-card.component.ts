import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-place-gift-card',
  templateUrl: './place-gift-card.component.html',
  styleUrls: ['./place-gift-card.component.css']
})
export class PlaceGiftCardComponent implements OnInit {
 
  placegift: FormGroup;
  submitted:boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.placegift = this.formBuilder.group({
      inr: ['',[Validators.required,Validators.pattern('^[0-9]{1,8}$')]],
      paisa:['',[Validators.required,Validators.pattern('^[0-99]{1,2}$')]],
      fn:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,20}$')]],
      ln:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,20}$')]],
      sa:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9-:]{3,30}$')]],
      city:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,30}$')]],
      state:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,30}$')]],
      pn:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      bfn:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,20}$')]],
      bln:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,20}$')]],
      emailid: ['', [Validators.required,Validators.email]],
      country:['',[Validators.required]],
      Mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      
      
  });}
  get f() { return this.placegift.controls; }
  OnSubmit(){
this.submitted=true;
if(this.placegift.valid){
  alert("please fill the details in the form")
}
  }

}
