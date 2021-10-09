import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
     quotes:Quote[] = [
          new Quote(1,'This is what makes them good engineers. Perfectionism: incinerating perfectionism.','― Ellen Ullman'),
          new Quote(2,'Coding like poetry should be short and concise','― Santosh Kalwar')
        ];

        completeQuote(isComplete: any, index: number){
          if (isComplete) {
            this.quotes.splice(index,1);
          }
        }
        
        toggleDetails(index:  number){
          this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
        }
        deleteQuote(isComplete: any, index: number){
            if (isComplete) {
              let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
        
              if (toDelete){
                this.quotes.splice(index,1)
              }
            }
          }
  constructor() {
  }
  ngOnInit(): void {
  }

}

