import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {


  arr = [1, 4, 2, 3]

  obj = [
    { sub: 'maths', marks: 90 },
    { sub: 'science', marks: 90 },
    { sub: 'sanskrit', marks: 90 }
  ]


}
