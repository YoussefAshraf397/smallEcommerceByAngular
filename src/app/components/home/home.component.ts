import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/goodInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[] = [
   { name: 'apple' , price: 5 , photo: 'assets/apple.jpeg'} ,
   { name: 'banana' , price: 10 , photo: 'assets/banana.jpeg'} ,
   { name: 'strwberry' , price: 20 , photo: 'assets/strwberry.jpeg'} ,
   { name: 'mango' , price: 60 , photo: 'assets/mango.jpeg'} ,
   { name: 'kiwi' , price: 35 , photo: 'assets/kiwi.jpeg'} ,
  ] ;

  constructor() { }

  ngOnInit(): void {
  }
  addToCart(index){
    console.log("added" , this.goods[index]) ;

  }

}
