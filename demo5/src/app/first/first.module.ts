import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';



@NgModule({
  declarations: [Comp1Component, Comp2Component],
  imports: [
    CommonModule, RouterModule.forChild([{path: 'comp1', component: Comp1Component},
    {path: 'comp2', component: Comp2Component}] )
  ]
})
export class FirstModule { }
