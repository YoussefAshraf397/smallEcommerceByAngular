import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire' ;
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    GoodsComponent,
    CartComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule ,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyD4V3wQSo2qnM7tqw0ENYCt5NA0HB1FoKE",
        authDomain: "small-market-e687c.firebaseapp.com",
        projectId: "small-market-e687c",
        storageBucket: "small-market-e687c.appspot.com",
        messagingSenderId: "524863907522",
        appId: "1:524863907522:web:b8e2c2cc5333bf1af67d5b",
        measurementId: "G-LFF0DYKE9V"
  }),
  AngularFirestoreModule,
  AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
