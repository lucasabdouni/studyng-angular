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

  public foodList: Array<FoodList> = [];

 constructor(private foodListService: FoodListService) {}

 ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      {
        next: (res: FoodList[]) => this.foodList = res,
        error: (err) => console.log(err)
      }
    );

   this.foodListService.emitEvent.subscribe({
    next: (res: any) => {
      alert(`Você adicionou um item => ${res.nome}`)
      return this.foodList.push(res)
    }
   });
 }

 public foodListEdit(value: string, id: number) {
  this.foodListService.foodListEdit(value, id).subscribe(
    res => {
      return console.log(res)
    },
    error => error
  )
 }

 public foodListDelete(id: number) {
  return this.foodListService.foodListDelete(id).subscribe(
    res => {
      this.foodList = this.foodList.filter(
        item => {
          return id !== item.id
        }
      )
    },
    error => error
  )
}
}
