import { Vinho } from '../../models/vinho';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VinhosService } from '../../services/vinhos.service';

@Component({
  selector: 'app-cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})
export class CadastroVinhoComponent implements OnInit {

  vinho: Vinho;
  uvas: Array<string>;
  classs: Array<string>;


  constructor(private router: Router, public vinhoService: VinhosService) { }

  ngOnInit() {
    this.vinho = new Vinho();
    this.uvas = ['Uva Verde', 'Amarela', 'Mauterino'];
    this.classs = ['Bom', 'OTIMO', 'AGRADAVEL'];

  }
  voltar(): void {
    this.router.navigate(['/vinhos']);
  }
  salvar() {
    this.vinhoService.cadastrar(this.vinho)
    .map(response => {
      console.log(JSON.stringify(response));
      alert('Vinho Cadastrado com sucesso');
      this.router.navigate(['/vinhos']);
    }).subscribe();




  }
}
