import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Observable<firebase.default.User |null>
  userId: string = '';

  constructor(private afAuth: AngularFireAuth) 
  { 
    this.user = afAuth.user
  }


  signUp(email , password)
  {
    return (this.afAuth.createUserWithEmailAndPassword(email , password));

  }

  logIn(email , password)
  {
    return (this.afAuth.signInWithEmailAndPassword(email , password)) ;
  }

  logOut()
  {
    return (this.afAuth.signOut()) ;
  }
}
