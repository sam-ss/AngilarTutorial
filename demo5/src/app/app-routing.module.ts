import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { DisplayComponent } from './display/display.component';
import { Comp1Component } from './first/comp1/comp1.component';
import { Comp2Component } from './first/comp2/comp2.component';


const routes: Routes = [
  {path: 'form1/:id', component: Form1Component},
  {path: 'form2', component: Form2Component},
  {path: 'display', component: DisplayComponent},
    {
    path: 'hrui',
    loadChildren: () => import('./first/first.module').then(mod => mod.FirstModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
