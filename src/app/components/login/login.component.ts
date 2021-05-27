import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errMessage: string = '';

  constructor(private as: AuthService , private router: Router) { }

  ngOnInit(): void {
  }
  signIn(form){
    let data = form.value ;
    this.as.logIn(data.email , data.password)
    .then(result => {
      this.errMessage = ''
    }).then(() => {  
        this.router.navigate(['/'])
      })
    .catch(err =>{
      this.errMessage = err.message
    } );  }

} 
