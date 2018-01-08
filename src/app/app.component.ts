import { Component } from '@angular/core';
import { VinhoFiltro } from './components/vinhos/vinho-filtro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VinhoFiltro]
})
export class AppComponent {
  title = 'app';

  constructor(){}

  procurar(){
   
  }
}
