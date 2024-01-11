import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() public title: string = 'Olá, devs'

  ngOnInit(): void{}

  ngOnDestroy(): void {
    console.log('Destroiu')
  }

  // ngOnChanges(): void {
  //   alert("Foi alterado com sucesso !")
  // }

//   ngDoCheck(): void {
//     console.log('check')
//   }

//   ngAfterContentInit(): void {
// console.log('afterContent')
//   }

//   ngAfterContentChecked(): void {
// console.log('afterContentCheck')
//   }
//   ngAfterViewInit(): void {
// console.log('afterViewInit')
//   }
//   ngAfterViewChecked(): void {
// console.log('AfterViewChecked')
//   }
}
