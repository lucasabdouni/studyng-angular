import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = [];

 constructor(private foodListService: FoodListService) {}

 ngOnInit(): void {
   this.foodList = this.foodListService.foodList();

   this.foodListService.emitEvent.subscribe(
    res => alert(`Você adicionou um item => ${res}`)
   );
 }
}
