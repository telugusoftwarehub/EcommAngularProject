import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/custom_services/shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_data: [];

  constructor(private sharedData: SharedDataService) { 
    this.cart_data = sharedData.getCartData();
  }

  ngOnInit() {
  }

}
