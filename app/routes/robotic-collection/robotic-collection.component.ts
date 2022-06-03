import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/custom_services/shared-data.service';

@Component({
  selector: 'app-robotic-collection',
  templateUrl: './robotic-collection.component.html',
  styleUrls: ['./robotic-collection.component.css']
})
export class RoboticCollectionComponent implements OnInit {

  robotic_products;

  constructor(private sharedGlobalData: SharedDataService) { }

  ngOnInit() {
    console.log(typeof this.sharedGlobalData.globalProductData());
    this.robotic_products = this.sharedGlobalData.globalProductData().filter((product) => {
      return (product.category.indexOf('robotics') !== -1);
    });

    console.log("this.robotic_products", this.robotic_products);
  }

}
