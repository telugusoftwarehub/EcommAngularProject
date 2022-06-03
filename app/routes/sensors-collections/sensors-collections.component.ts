import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/custom_services/shared-data.service';

@Component({
  selector: 'app-sensors-collections',
  templateUrl: './sensors-collections.component.html',
  styleUrls: ['./sensors-collections.component.css']
})
export class SensorsCollectionsComponent implements OnInit {

  sensors;

  constructor(private sharedGlobalData: SharedDataService) { }

  ngOnInit() {
    console.log(typeof this.sharedGlobalData.globalProductData());
    this.sensors = this.sharedGlobalData.globalProductData().filter((product) => {
      return (product.category.indexOf('sensors') !== -1);
    });

    console.log("this.sensors", this.sensors);
  }

}
