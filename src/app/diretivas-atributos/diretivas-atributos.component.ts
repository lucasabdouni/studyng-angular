import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrl: './diretivas-atributos.component.scss'
})
export class DiretivasAtributosComponent {
  public valor: boolean = true
  public height: string = '20px'
  public backgroundColor: string = 'black'

  public nome: string = "";
  public list: Array<{nome: string}> = []

  constructor() {}

  public salvar(){
    this.list .push({nome: this.nome})
    this.nome = ''
  }
}
