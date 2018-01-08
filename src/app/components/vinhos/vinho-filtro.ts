import { Vinho } from './../../models/vinho';
import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

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