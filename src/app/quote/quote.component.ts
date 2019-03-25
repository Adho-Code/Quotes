import { Component,OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class Quotecomponent implements OnInit {
   public show:boolean = false;
   public buttonName:any = 'show';

     quotes = [
      new Quote(1,'Chuu Galgallo','Elizabeth Mwangi Robert','Be the change that you wish to see in the world',new Date(2019,3,11)),
      new Quote(1,'Peter Munya','Karungi Ochieng','No one can make you feel inferior without your consent.',new Date(2019,12.10)),
      new Quote(3,'Joseph Kariuki','Dinah Gitonga','It is never too late to be what you might have been',new Date(2019,4,9)),
      new Quote(4,'Ken Maina','Lilian Waweru','Without music, life would be a mistake',new Date(2019,5,8)),
    
    ]

    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      this.quotes.push(quote)
    }

   deleteQuote(isComplete,index){
      if (isComplete){
        let toDelete=confirm(`Do you want to delete ${this.quotes[index].publisher}`)
        if(toDelete){
          this.quotes.splice(index,1)

        }

      }

    }
  
    constructor(){ }

    ngOnInit(){ }

    }

    
    