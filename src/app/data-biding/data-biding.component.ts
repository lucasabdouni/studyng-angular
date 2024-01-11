import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.scss'
})
export class DataBidingComponent {
  public nome: string = "Lucas"
  public idade: number = 2
  public checkedDisabled: boolean = false

  public position: {x: number, y: number} = {x: 0, y: 0}

  public alertaInfo(valor: string) {
    alert(valor)
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }

  constructor() {}
}
