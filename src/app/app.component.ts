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
<!--
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()"> Add </button> -->

  <!-- <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h1>{{getDados.idade}}</h1>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output> -->

  <app-food-add></app-food-add>
  <app-food-list></app-food-list>

  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public destruir:boolean = true;
  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;

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

  public setDados(event: { nome: string, idade: number}){
    this.getDados = event;
  }

  ngOnInit(): void {
  }
}
