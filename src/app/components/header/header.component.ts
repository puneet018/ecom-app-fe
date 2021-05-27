import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  sellerFlag = false;
  pincode: number | undefined;

  ngOnInit(): void {
  }

  findStoreByPincode(): void{
    this.pincode
  }

}
