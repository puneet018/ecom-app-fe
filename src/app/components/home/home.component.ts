import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    {id: 1, name:'Tomato', product_cat:1, price:20, quantity:20, image: 'assets/imgs/tomato.jpg', description: 'Tomamo'},
    {id: 2, name:'Carrot', product_cat:1, price:20, quantity:20, image: 'assets/imgs/carrot.jpg', description: 'Chili'},
    {id: 3, name:'Potato', product_cat:1, price:20, quantity:20, image: 'assets/imgs/pexels-lukas.jpg', description: 'Potato'},
    {id: 4, name:'Onion', product_cat:1, price:20, quantity:20, image: 'assets/imgs/pexels-lukas.jpg', description: 'Onion'},
    {id: 5, name:'Tomato', product_cat:1, price:20, quantity:20, image: 'assets/imgs/pexels-lukas.jpg', description: 'Tomamo'},
    {id: 6, name:'Chili', product_cat:1, price:20, quantity:20, image: 'assets/imgs/pexels-lukas.jpg', description: 'Chili'},
    {id: 7, name:'Potato', product_cat:1, price:20, quantity:20, image: 'assets/imgs/pexels-lukas.jpg', description: 'Potato'},
    {id: 8, name:'Onion', product_cat:1, price:20, quantity:0, image: 'assets/imgs/pexels-lukas.jpg', description: 'Onion'},
    {id: 9, name:'Apple', product_cat:2, price:50, quantity:50, image: 'assets/imgs/pexels-lukas.jpg', description: 'Apple'},
    {id: 10, name:'Banan', product_cat:2, price:50, quantity:20, image: 'assets/imgs/pexels-lukas.jpg', description: 'Banan'},
    {id: 11, name:'Pinapple', product_cat:2, price:70, quantity:30, image: 'assets/imgs/pexels-lukas.jpg', description: 'Pinapple'},
    {id: 12, name:'Apple', product_cat:2, price:50, quantity:50, image: 'assets/imgs/pexels-lukas.jpg', description: 'Apple'}
]

shopKeepers = [
  {id: 1, name:'Ram Kishan', sellerSale:'Vegs Shop', image:'assets/imgs/keeper-pics/k1.jpg'},
  {id: 2, name:'Kishor ', sellerSale:'Vegs & Fruits Shop', image:'assets/imgs/keeper-pics/k1.jpg'},
  {id: 3, name:'Montu', sellerSale:'Fruits Shop', image:'assets/imgs/keeper-pics/k1.jpg'},
  {id: 4, name:'Shekhar', sellerSale:'Vegs & Fruits Shop', image:'assets/imgs/keeper-pics/k1.jpg'},
  {id: 5, name:'Prakash', sellerSale:'Vegs & Fruits Shop', image:'assets/imgs/keeper-pics/k1.jpg'}
]
  constructor() { }

  ngOnInit(): void {
  }

  AddProduct(id: Number) {
   // this.cartService.AddProductToCart(id);
  }

  selectProduct(id: Number) {
    //this.router.navigate(['/product', id]).then();
  }

}
