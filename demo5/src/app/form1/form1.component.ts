import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  str: string;
  empno:string;
  empname:string;
  salaray:number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.str = route.snapshot.paramMap.get('id');
    console.log(router);
  }

  ngOnInit() {
  }
  change() {
    this.str = this.route.snapshot.paramMap.get('id');
    console.log('changes................' + this.str);
    this.router.navigate(['/display']);
  }

}
