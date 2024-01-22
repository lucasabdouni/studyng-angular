import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  public listComidas: Array<{comida: string}> = [
    {
      comida: 'Miojo'
    }, 
    {
      comida: 'Coxinha'
    },
    {
      comida: 'Chocolate'
    }
  ] 

  constructor() {}

  public submitForm(form: NgForm) {
    console.log(form.value)
  }
}
