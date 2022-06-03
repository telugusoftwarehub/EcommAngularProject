import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/custom_services/shared-data.service';

@Component({
  selector: 'app-wireless-collections',
  templateUrl: './wireless-collections.component.html',
  styleUrls: ['./wireless-collections.component.css']
})
export class WirelessCollectionsComponent implements OnInit {

  wireless_products;

  constructor(private sharedGlobalData: SharedDataService) { }

  ngOnInit() {
    console.log(typeof this.sharedGlobalData.globalProductData());
    this.wireless_products = this.sharedGlobalData.globalProductData().filter((product) => {
      return (product.category.indexOf('wireless') !== -1);
    });

    console.log("this.wireless_products", this.wireless_products);
  }

}
