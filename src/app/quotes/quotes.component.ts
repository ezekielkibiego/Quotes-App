import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    title = 'quotes';
    quotes: string[];
    // quote = 'We build our computers the way we build our cities—over time, without a plan, on top of ruins.'

  constructor() {
      this.quotes = ['We build our computers the way we build our cities—over time, without a plan, on top of ruins.', 'In the end, it all comes down to 0 and 1', 'This is what makes them good engineers. Perfectionism: incinerating perfectionism.'];
  }

  ngOnInit(): void {
  }

}

