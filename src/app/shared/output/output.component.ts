import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome: string, idade: number}> = [
    {
      nome: 'Lucas Abdouni',
      idade: 26
    },
    {
      nome: 'Sarah',
      idade: 24
    },
    {
      nome: 'Gabriel',
      idade: 22
    }
  ]

  constructor() {}

  public getDados(event: number){
    this.enviarDados.emit(this.list[event])
  }
}
