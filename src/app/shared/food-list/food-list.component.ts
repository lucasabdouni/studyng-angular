import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from '../../services/food-list.service';
import { FoodList } from '../../module/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList | any

 constructor(private foodListService: FoodListService) {}

 ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      {
        next: (res: FoodList) => this.foodList = res,
        error: (err) => console.log(err)
      }
    );

   this.foodListService.emitEvent.subscribe({
    next: (res: any) => alert(`Você adicionou um item => ${res}`)
   });
 }
}
