import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  global_products_data: any;
  default_url:string = "assets/products.json";
  default_cb = (data) => {};
  cart_data: any;

  constructor(private http: HttpClient) { 
    this.global_products_data = [];
    this.cart_data = [];
  }

  ngOnInit() {
  }

  getHttp(cb = this.default_cb, url = this.default_url) {
     this.http.get(url).subscribe((response) => {
       console.log(response);
       this.global_products_data = response;
       cb(this.global_products_data);
      });
  }

  globalProductData() {
    console.log(this.global_products_data);
    console.log(typeof this.global_products_data);
      return this.global_products_data;
  }

  getCartData() {
    return this.cart_data;
  }

  updateCartData(obj) {
    var status,
        i;

    if(this.cart_data.length === 0) {
        this.cart_data.push(obj);
    }
    else {  
        for(i = 0; i < this.cart_data.length; i++) {
            if(this.cart_data[i].title.indexOf(obj.title) !== -1) {
              status = true;
              break;
            }
            else 
              status = false;
        }
        status ? this.cart_data[i].cartQuantity++ : this.cart_data.push(obj);
    }
    console.log(this.cart_data);
  }
}
