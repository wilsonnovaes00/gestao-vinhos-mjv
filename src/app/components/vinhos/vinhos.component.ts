import { VinhoFiltro } from './../../filters/vinho-filtro';
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
  vinhosSelecionados: Array<number>;

  constructor(public vinhosServices: VinhosService, private router: Router, private filter: VinhoFiltro){
    this.vinhosSelecionados = new Array();
  }

  ngOnInit() {
    this.listar();
    console.log(this.vinhosSelecionados.length);
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

  selecionarConjunto(id, check) : void{
    let vinhos = document.getElementsByClassName("vinhoSelecionar");
    let vinhosLen = vinhos.length;
    let selectedAll = document.getElementById("selectAll"); 
    selectedAll.checked = (this.vinhosSelecionados.length >= vinhosLen+1);
    if(id < 0){
      
      if(!check){
        this.vinhos.map((vinho) => this.vinhosSelecionados.push(vinho.id));
        selectedAll.checked = true;

        for(let i = 0; i < vinhosLen; i++){
          vinhos[i].checked = true;
          vinhos[i].value = true;

        }
      }else{

        selectedAll.checked = false;


        for(let i = 0; i < vinhosLen; i++){
          vinhos[i].checked = false;
          vinhos[i].value = false;

        }

        this.vinhosSelecionados = new Array();
      }
      return;
    }

    var index = this.vinhosSelecionados.indexOf(id);
    if(!check && index < 0){
      this.vinhosSelecionados.push(id);
    }else{
      this.vinhosSelecionados.splice(index,1);
    }

    
  }
  remover(id: number): void {
    this.vinhosServices.remover(this.vinhoSelecionado.id)
    .subscribe();
    this.listar();
  }

  async removerItens(){
    await this.vinhosSelecionados.forEach(id => {
      this.vinhosServices.remover(id).subscribe();
    });
    
    this.listar();
    this.vinhosSelecionados = new Array();
    this.vinhoSelecionado = null;
  }
}
