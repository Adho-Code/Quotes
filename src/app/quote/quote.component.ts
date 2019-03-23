import { Component,OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class Quotecomponent implements OnInit {

     quotes = [
      new Quotes(1,'Be the change that you wish to see in the world','Be yourself',new Date(2019,3,11)),
      new Quotes(1,'No one can make you feel inferior without your consent.','Be yourself,everyone is already taken',new Date(2019,12.10)),
      new Quotes(3,'It is never too late to be what you might have been','Never give up on something that you desire in life',new Date(2019,4,9)),
    ]



    deleteQuote(isComplete,index){
      if (isComplete){
        let toDelete=confirm(`Do you want to delete ${this.quotes[index].name}`)

        if(toDelete){
          this.quotes.splice(index,1)

        }

      }

    }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
    toogleDetails(index){
      this.quotes[index].showDescription = 
      !this.quotes[index].showDescription;
    }

    constructor(){ }
    ngOnInit(){

    }

    }
    