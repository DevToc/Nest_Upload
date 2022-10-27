import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { Cats } from './cats.mock';

@Injectable()
export class CatsService {
  cats:Cat[] = Cats;

  getCats(): Cat[] {
    return this.cats;
  }
  getCat(catid):Cat {
    let ca ;
    this.cats.map(cat=>{
      if(cat.id===parseInt(catid)){
        ca =  cat;
        return;
      }
    })
    return ca;
    
  }
    
  
  addCat(cat:any):void{
    this.cats.push(cat)
  }
}