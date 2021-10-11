// import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appHighlightQuote]'
// })
// export class HighlightQuoteDirective {

//   constructor(private elem:ElementRef) { 
//   }
//   @HostListener("click") onClicks(){
//     this.textDeco("black")
//   }

//   @HostListener("dblclick") onDoubleClicks(){
//     this.textDeco("None")
//   }
//   private textDeco(action:string){
//     this.elem.nativeElement.style.color=action;
//   }

// }
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor="brown"
  }

}
