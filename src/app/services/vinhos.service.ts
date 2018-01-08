import { Injectable, transition } from '@angular/core';
import { Vinho } from '../models/vinho';
import { Http, Headers, RequestOptions, Request, RequestMethod, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class VinhosService {

  constructor(private http: Http) { }

  listar(): Observable<Array<Vinho>> {
    return this.http.get('api/vinhos')
      .map(response => response.json() as Array<Vinho>)
      .catch(this.tratarErro);
  }

  buscar(id: number): Observable<Vinho> {
    return this.http.get(`api/vinhos/${id}`)
      .map(response => response.json() as Vinho)
      .catch(this.tratarErro);
  }

  atualiza(id: number, vinho): Observable<Response> {
    return this.http.put(`api/vinhos/${id}`, vinho, this.header())
      .map(response => response.json() as Vinho)
      .catch(this.tratarErro);
  }

  cadastrar(vinho: Vinho): Observable<Response> {
    return this.http.post('api/vinhos', JSON.stringify(vinho), this.header())
      .map(response => response)
      .catch(this.tratarErro);
  }

  remover(id: number): Observable<Response> {
    return this.http.delete(`api/vinhos/${id}`, this.header())
      .map(response => response)
      .catch(this.tratarErro);
  }

  private header(): RequestOptions {
    const headers = new Headers({ 'content-type': 'application: json' });
    const requestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }
  private tratarErro(err: any): Observable<any> {
    console.log(err);
    return Observable.throw(err.message || err);
  }
  private criarVinho(
    id: number,
    nome: string,
    uva: string,
    classificacao: string,
    fabricante: string,
    anoSafra: number,
    paisOrigem: string
  ): Vinho {

    const vinho: Vinho = new Vinho();
    vinho.id = id;
    vinho.nome = nome;
    vinho.uva = uva;
    vinho.classificacao = classificacao;
    vinho.fabricante = fabricante;
    vinho.anoSafra = anoSafra;
    vinho.paisOrigem = paisOrigem;
    return vinho;
  }

}
