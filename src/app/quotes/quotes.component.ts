import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
     quotes:Quote[] = [
          new Quote(1, 'Ezekiel Kibiego',  'This is what makes them good engineers. Perfectionism: incinerating perfectionism.','Ellen Ullman', new Date(2021,10,8)),
          new Quote(2, 'Ezekiel Kibiego', 'If you think technology can solve your security problems, then you don’t understand the problems and you don’t understand the technology.','Santosh Kalwar', new Date(2021,10,8)),
          new Quote(3, 'Ezekiel Kibiego', 'Investing in tomorrow’s technology today is more critical than ever', 'Bill Gates', new Date(2021,10,8))
        ];
        
        

        completeQuote(isComplete: any, index: number){
          if (isComplete) {
            this.quotes.splice(index,1);
          }
        }
        
        toggleDetails(index:  number){
          this.quotes[index].showAuthor = !this.quotes[index].showAuthor ;
          this.quotes[index].showYourName = !this.quotes[index].showYourName ;
        }
        deleteQuote(isComplete: any, index: number){
            if (isComplete) {
              let toDelete = confirm(`Are you sure you want to delete this quote?`)
        
              if (toDelete){
                this.quotes.splice(index,1)
              }
            }
          }
  constructor() {
  }
  ngOnInit(): void {
  }

  

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
}


