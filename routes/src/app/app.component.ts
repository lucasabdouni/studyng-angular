import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-menu />
  <router-outlet />
  `,
})
export class AppComponent {
}
