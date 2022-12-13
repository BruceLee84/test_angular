import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('userForm') user:NgForm;

setDefaultValue(){
  this.user.setValue({
    "name": "bala",
    "email": "bala123@gmail.com",
    "state": "TN",
    "pass": "bala123"
  })
}

  patchValue(){
    this.user.form.patchValue({
      "email": "bala456@gmail.com",
    "state": "KL",
    })
  }


  onSubmit=(userForm:NgForm)=>{
     console.log('userform', userForm)
     console.log('value', userForm.form.value)
     console.log('email', userForm.form.controls)
  } 


   state = [{
    state:'TN',
  },
{
  state:'AP'
},
{
  state:'KL'
}]

  constructor() { }

  ngOnInit(): void {
  }

}
