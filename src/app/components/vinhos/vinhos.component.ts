import { VinhoFiltro } from './vinho-filtro';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vinho } from '../../models/vinho';
import { VinhosService } from '../../services/vinhos.service';

@Component({
  selector: 'app-vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  search: string;
  vinhoSearch: string;
  vinhoSelecionado: Vinho;

  constructor(public vinhosServices: VinhosService, private router: Router, private filter: VinhoFiltro){}

  ngOnInit() {
    this.listar();
  }
  private listar() {
    this.vinhosServices.listar()
    .subscribe((vinhos: Array<Vinho>) => {
      this.vinhos = vinhos;
    });
  }
  selecionar(vinho: Vinho) {
    this.vinhoSelecionado = vinho;
  }
  vizualizar(): void {
    this.router.navigate(['/detalhes-vinho', this.vinhoSelecionado.id]);
  }
  editar(): void {
    this.router.navigate(['/cadastro-vinho', this.vinhoSelecionado.id]);
  }

  procurar() : void{
    this.search = this.vinhoSearch;
  }

  remover(id: number): void {
    this.vinhosServices.remover(this.vinhoSelecionado.id)
    .subscribe();
    this.listar();
  }
}
