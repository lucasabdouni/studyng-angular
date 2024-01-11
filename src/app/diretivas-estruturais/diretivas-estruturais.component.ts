import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrl: './diretivas-estruturais.component.scss'
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true
  public conditionClick: boolean = true
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition === true) {
        this.condition = false
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick === true) {
      this.conditionClick = false
    } else {
      this.conditionClick = true;
    }
  }
}
