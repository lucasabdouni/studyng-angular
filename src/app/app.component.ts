import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>

  <br>
  <button (click)="destruirComponent()">Destruir evento</button>

  <br>

  <app-data-biding></app-data-biding>

  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public destruir:boolean = true;

  public valor: number = 0;
  public adicionar(): number{
    return this.valor += 1;
  }

  public destruirComponent() {
    this.destruir = false
  }

  constructor() {}

  ngOnInit(): void {
  }
}
