import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-title *ngIf="destruir"></app-title>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>

  <br>
  <button (click)="destruirComponent()">Destruir evento</button>

  <br>

  <app-data-biding></app-data-biding>

  <app-diretivas-estruturais></app-diretivas-estruturais>

  <app-diretivas-atributos>
    <h1>Aulas de Diretivas de Atributo</h1>
    <hr>
  </app-diretivas-atributos> -->

  <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
  <!-- <app-new-component></app-new-component> -->

  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()"> Add </button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public destruir:boolean = true;

  public addValue: number = 0;

  public valor: number = 0;
  public adicionar(): number{
    return this.valor += 1;
  }

  public destruirComponent() {
    this.destruir = false
  }

  constructor() {}

  public add() {
    this.addValue += 1;
  }

  ngOnInit(): void {
  }
}
