import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/custom_services/shared-data.service';

@Component({
  selector: 'app-wired-collection',
  templateUrl: './wired-collection.component.html',
  styleUrls: ['./wired-collection.component.css']
})
export class WiredCollectionComponent implements OnInit {

  wired_products;

  constructor(private sharedGlobalData: SharedDataService) { }

  ngOnInit() {
    console.log(typeof this.sharedGlobalData.globalProductData());
    this.wired_products = this.sharedGlobalData.globalProductData().filter((product) => {
      return (product.category.indexOf('wired') !== -1);
    });

    console.log("this.wired_products", this.wired_products);
  }

}
