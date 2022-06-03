import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../../custom_services/shared-data.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  subscription: Subscription;

  constructor(private getProductService: SharedDataService) { }

  getProductsDataCallBack = (data) => { 
    this.products = data;
    // console.log("products == ", this.products);
    console.log(data);
  }

  ngOnInit() {
    
   this.products = this.getProductService.getHttp(this.getProductsDataCallBack); //making a call to database using angular service
  }


}
