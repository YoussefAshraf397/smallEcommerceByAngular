import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Shopping } from 'src/app/interfaces/shoppingInterface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Shopping[] = [] ;

  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe(cart=>{
      this.cart = cart.map(shopping => {
        return{
          id:shopping.payload.doc.id,
          ...shopping.payload.doc.data() as Shopping
        }
      })
    })
  }

  Delete(index)
  {
    this.cs.delete(this.cart[index].id).then(()=>{res => console.log(res)})
  }

}
