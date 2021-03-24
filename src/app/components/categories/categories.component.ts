import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
 categories: any;

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    //We call to our service and receive the information of the houses
    this.jsonService.getJson("./../assets/categories.json").subscribe(result$ => {
    console.log(result$)
    this.categories = result$;
  })
  }

}
