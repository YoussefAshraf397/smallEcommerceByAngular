import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/interfaces/userInterface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errMessage: string = '';

  constructor(private as: AuthService , private us: UserService , private router: Router) { }

  ngOnInit(): void {
  }

  signUp(form)
  {
    let data: User = form.value ;
    this.as.signUp(data.email , data.password)
    .then(result => {
      this.errMessage = ''
      this.us.addNewUser(result.user.uid , data.name , data.address).then(() => {  
        this.router.navigate(['/'])
      })
    })
    .catch(err =>{
      this.errMessage = err.message
    } );
  }

}
