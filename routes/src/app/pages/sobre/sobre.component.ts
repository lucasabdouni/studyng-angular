import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      res => {console.log(res)}
    )

    this.activatedRouter.queryParamMap.subscribe(
      res => { console.log(res) }
    )

    setInterval(() => {
      this.router.navigate(['404']);
      // this.router.navigateByUrl('404');
    }, 5000)
  }
}
