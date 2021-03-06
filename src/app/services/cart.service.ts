import { Injectable } from '@angular/core';
import { Good } from 'src/app/interfaces/goodInterface';
import { AuthService } from 'src/app/services/auth.service';

import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore , private as: AuthService) { }

  addToCart(data: Good)
  {

     return (this.fs.collection('users/${this.as.userId}/cart').add(data)) ;
  }

  getCart()
  {
    return (this.fs.collection('users/${this.as.userId}/cart').snapshotChanges()) ;

  }

  delete(id)
  {
    return (this.fs.doc('users/${this.as.userId}/cart/${id}').delete());

  }
}
