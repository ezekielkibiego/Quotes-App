import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit { 
     quotes:Quote[] = [
          {id:1, name:'This is what makes them good engineers. Perfectionism: incinerating perfectionism.', author:'― Ellen Ullman'},
          {id:2,name:'Coding like poetry should be short and concise', author:'― Santosh Kalwar'},
        ];

  constructor() {
  }
  ngOnInit(): void {
  }

}

