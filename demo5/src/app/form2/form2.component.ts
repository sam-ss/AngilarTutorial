import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
myformgrp: FormGroup;
empno:string;
  empname:string;
  salaray:number;

  constructor(private fb: FormBuilder) {
    this.myformgrp =
      fb.group({
        empcocn: ['4'],
        empname: ["", [Validators.required, Validators.minLength(4)]],
        salarycn:["",[Validators.min(100), Validators.max(10)]]
      })

  }

  ngOnInit() {
  }

}
