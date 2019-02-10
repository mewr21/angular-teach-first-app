import { Component } from '@angular/core';
import { Card } from './card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  caeds: Card[] = [];
  get sorted() : Card[]{
    console.log('access');
    return this.cards.sort((a, b) => b.votes - a.votes);  //เรียงจากมากไปน้อย

  }
  cards: Card[] =[];
  onclick(firstName :HTMLInputElement,lastName :HTMLInputElement){
    //console.log(firstName.value,lastName.value);
    const card = new Card(firstName.value,lastName.value,0);
    console.log(card)
    this.cards.push(card);
    firstName.value ='';
    lastName.value = '';
    
  }
}
