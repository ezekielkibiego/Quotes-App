import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 
 
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();



  numberOfLikes : number = 0;
numberOfDislikes: number = 0;
likeButtonClick() {
  this.numberOfLikes++;
}
dislikeButtonClick(){
  this.numberOfDislikes++;
}
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

 
  constructor() { }

  ngOnInit() {
  }
}
