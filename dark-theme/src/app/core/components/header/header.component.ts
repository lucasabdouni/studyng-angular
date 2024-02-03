import { Component, OnInit } from '@angular/core';
import { Etheme } from '../../enums/Eherme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public icon: string = Etheme.ICON_MOON;
  public textTheme: string = Etheme.TEXT_MOON;
  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = Etheme.TEXT_SUN;
      return (this.icon = Etheme.ICON_SUN);
    }

    this.textTheme = Etheme.TEXT_MOON;
    return (this.icon = Etheme.ICON_MOON);
  }
}
