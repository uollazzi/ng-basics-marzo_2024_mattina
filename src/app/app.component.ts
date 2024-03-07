import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numero?: number = 8; // nullable
  title = "Pippo!!ss";
  private apiKey = "kjsdkjdaskjdaskj";
  ok: number | boolean = 0;
  preferitiVisibili = false;

  getPosts() {
    // chiamata ajax con apiKey
    this.numero = undefined;

    if (this.numero) {
      let totale = 10 + this.numero;
    }

    let totale = 10 + this.numero!;


  }

  // aggiornaTitolo() {
  //   this.title = document.querySelector<HTMLInputElement>("#inputTitolo")!.value;
  // }

  togglePreferiti() {
    this.preferitiVisibili = !this.preferitiVisibili;
  }
}
