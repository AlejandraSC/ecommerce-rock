import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {
  tops: any;

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    //We call to our service and receive the information of the houses
    this.jsonService.getJson("./../assets/top-products.json").subscribe(result$ => {
      console.log(result$)
      this.tops = result$;
    })
  }

}
