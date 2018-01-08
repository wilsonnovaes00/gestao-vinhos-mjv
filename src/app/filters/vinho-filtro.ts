import { Vinho } from './../models/vinho';
import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtroVinhoNome'
})

export class VinhoFiltro implements PipeTransform{
    transform(vinhos : Vinho[], nomeFiltro: string) : Vinho[] {
        if(!vinhos || !nomeFiltro){
            return vinhos;
        }



        return vinhos.filter((vinho) => {
              return vinho.nome.toLocaleLowerCase().includes(nomeFiltro.toLocaleLowerCase());
        });
    }
}