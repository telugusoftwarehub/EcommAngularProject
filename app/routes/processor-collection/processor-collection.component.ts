import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/custom_services/shared-data.service';

@Component({
  selector: 'app-processor-collection',
  templateUrl: './processor-collection.component.html',
  styleUrls: ['./processor-collection.component.css']
})
export class ProcessorCollectionComponent implements OnInit {

  processors;

  constructor(private sharedGlobalData: SharedDataService) { }

  ngOnInit() {
    console.log(typeof this.sharedGlobalData.globalProductData());
    this.processors = this.sharedGlobalData.globalProductData().filter((product) => {
      return (product.category.indexOf('processor') !== -1);
    });

    console.log("this.processors", this.processors);
  }

}
