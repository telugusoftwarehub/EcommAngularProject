import { Component, OnInit, Input } from '@angular/core';
import { SharedDataService } from 'src/app/custom_services/shared-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product_input') product;

  constructor(private cartSharedService: SharedDataService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartSharedService.updateCartData(this.product);
  }

}
