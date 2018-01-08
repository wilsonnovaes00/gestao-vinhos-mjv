import { Component, OnInit } from '@angular/core';
import { VinhosService } from '../../services/vinhos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Vinho } from '../../models/vinho';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-detalhes-vinhos',
  templateUrl: './detalhes-vinhos.component.html',
  styleUrls: ['./detalhes-vinhos.component.css']
})
export class DetalhesVinhosComponent implements OnInit {

  vinho: Vinho;

  constructor(
    private router: Router,
    private rotaAtiva: ActivatedRoute,
    private vinhoService: VinhosService) { }

  ngOnInit() {
    this.vinho = new Vinho();
    this.rotaAtiva.params.forEach((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.buscarVinho(id);
      }
    });
  }

  private buscarVinho(id: number) {
    this.vinhoService.buscar(id).subscribe(data => this.vinho = data);
  }
  retornar(): void {
    this.router.navigate(['/vinhos']);
  }
}
