import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { typeSourceSpan } from '@angular/compiler';
import { DepFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-seller-login-register',
  templateUrl: './seller-login-register.component.html',
  styleUrls: ['./seller-login-register.component.css']
})
export class SellerLoginRegisterComponent implements OnInit {




  constructor(private router: Router) { }

  sellerFlag = false;
  username = '';
  password = '';
  isActive = false;

  ngOnInit(): void {

  }

  toggleFormActive = () => {
      this.isActive = true;
  };
  toggleFormDeActive = () => {
      this.isActive = false;
  };

  signup(): boolean{

    return this.sellerFlag;
  }

  signin(): void{
    if(this.username=='admin' && this.password=='admin'){
      this.sellerFlag = true;
      this.router.navigate(["dashboard"]);
    }else {
      alert("Invalid credentials");
    }

  }

}
