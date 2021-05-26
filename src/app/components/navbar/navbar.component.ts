import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false ;
  isUser: boolean = false ;

  constructor(private as: AuthService ) { }

  ngOnInit(): void {
    this.as.user.subscribe(user => {
      if(user)
      {
        this.isUser = true ;
        this.as.userId =user.uid ;

      }
      else
      {
        this.isUser = false ;
        this.as.userId ='' ;

      }
    })
  }

  toggleNav() 
  {
    this.isOpen = !this.isOpen ;
  }

  logOut()
  {
    this.as.logOut().then(()=>console.log('out'));

  }

}
