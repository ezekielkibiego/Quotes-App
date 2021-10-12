import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0,"","", "", new Date());
@Output() addQuote = new EventEmitter<Quote>();
  quotes: any;

  submitQuote(){
this.addQuote.emit(this.newQuote);
this.newQuote = new Quote(0,"","", "", new Date());
let submitQuote = confirm(`You are about to add a new quote...`)

if (submitQuote){
  this.quotes.splice(index,1)
}
}

  
  

  constructor() { }

  ngOnInit(): void {
  }

  
}


function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

