import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Good } from 'src/app/interfaces/goodInterface';
import { GoodsService } from 'src/app/services/goods.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  // goods: Good[] = [
  //  { name: 'apple' , price: 5 , photo: 'assets/apple.jpeg'} ,
  //  { name: 'banana' , price: 10 , photo: 'assets/banana.jpeg'} ,
  //  { name: 'strwberry' , price: 20 , photo: 'assets/strwberry.jpeg'} ,
  //  { name: 'mango' , price: 60 , photo: 'assets/mango.jpeg'} ,
  //  { name: 'kiwi' , price: 35 , photo: 'assets/kiwi.jpeg'} ,
  // ] ;

  goods: Good[];
  goodsObservable: Subscription;
  add: number = -1 ;

  constructor(private gs: GoodsService , private cs: CartService) { }

  ngOnInit(): void {
    this.goodsObservable = this.gs.getAllGoods().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id:element.payload.doc.id,
          ...element.payload.doc.data() as Good
        }
      })
    });
  }

  ngOnDestroy(){
    this.goodsObservable.unsubscribe(); 

  }

  addToCart(index)
  {
    this.add = +index ;

  }

  buy(amount: number)
  {
    let selectedGood = this.goods[this.add];
    let data = {
      name: selectedGood.name ,
      amount: +amount ,
      price: selectedGood.price
    }

    this.cs.addToCart(data).then(()=>this.add = -1);

  }

}
