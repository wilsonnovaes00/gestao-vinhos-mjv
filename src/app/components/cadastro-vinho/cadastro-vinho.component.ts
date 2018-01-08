import { Vinho } from '../../models/vinho';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VinhosService } from '../../services/vinhos.service';
import { NotificacaoService } from '../../services/notificacao.service';
import { Notificacao } from '../../models/notificacao';

@Component({
  selector: 'app-cadastro-vinho',
  templateUrl: './cadastro-vinho.component.html',
  styleUrls: ['./cadastro-vinho.component.css']
})
export class CadastroVinhoComponent implements OnInit {

  vinho: Vinho;
  uvas: Array<string>;
  classs: Array<string>;
  titulo: string;


  constructor(
    private router: Router,
    private vinhoService: VinhosService,
    private notificacaoService: NotificacaoService,
    private rotaAtiva: ActivatedRoute) { }

  ngOnInit() {
    this.vinho = new Vinho();
    this.uvas = ['Uva Verde', 'Amarela', 'Mauterino'];
    this.classs = ['Bom', 'OTIMO', 'AGRADAVEL'];
    this.titulo = 'Cadastro de Vinho';

    this.rotaAtiva.params.forEach((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.titulo = 'Edição de  vinho';
        this.carregarVinho(id);
      }
    });
  }

  private carregarVinho(id) {
    this.vinhoService.buscar(id).subscribe(data => this.vinho = data);
  }
  voltar(): void {
    this.router.navigate(['/vinhos']);
  }
  salvar() {
    if (this.vinho.id) {
      this.atualizar();
    } else {
      this.cadastrarNovo();
    }
  }

  private cadastrarNovo() {
    this.vinhoService.cadastrar(this.vinho)
    .map(response => {

      const notificacao: Notificacao = new Notificacao();
      notificacao._mensagem = 'Vinho Cadastrado com Sucesso!';
      notificacao.tipo = 'success';
      this.notificacaoService.adicionar(notificacao);

      this.router.navigate(['/vinhos']);
    }).subscribe();
  }
  private atualizar() {
    this.vinhoService.atualiza(this.vinho.id, this.vinho)
    .map(response => {

      const notificacao: Notificacao = new Notificacao();
      notificacao._mensagem = 'Vinho Atualizado com Sucesso!';
      notificacao.tipo = 'success';
      this.notificacaoService.adicionar(notificacao);


      this.router.navigate(['/vinhos']);
    }).subscribe();
  }
}
