import { InMemoryDbService } from 'angular-in-memory-web-api';

export class VinhoApi implements InMemoryDbService {

  createDb() {
    const vinhos =  [
          {id: 1, nome: 'Casillero Del Diablo', classificacao: 'Tinto', uva: 'Cabernet Sauvignon', fabricante: 'Concha y Toro', paisOrigem: 'Chile', anoSafra: 2010 },
          {id: 2, nome: 'Salton Talento', classificacao: 'Tinto', uva: 'Carmenere', fabricante: 'Vinícola Salton', paisOrigem: 'Brasil', anoSafra: 2012 },
          {id: 3, nome: 'Salton Desejo', classificacao: 'Tinto', uva: 'Merlot', fabricante: 'Vinícola Salton', paisOrigem: 'Brasil', anoSafra: 2008 },
          {id: 4, nome: 'Herdeiros Del Marques de Riscal', classificacao: 'Tinto', uva: 'Cabernet Sauvignon', fabricante: 'Riscal', paisOrigem: 'Espanha', anoSafra: 2007 },
          {id: 5, nome: 'Herdeiros Del Marques de Riscal', classificacao: 'Tinto', uva: 'Cabernet Sauvignon', fabricante: 'Riscal', paisOrigem: 'Espanha', anoSafra: 2007 },
          {id: 6, nome: 'Herdeiros Del Marques de Riscal', classificacao: 'Tinto', uva: 'Cabernet Sauvignon', fabricante: 'Riscal', paisOrigem: 'Espanha', anoSafra: 2007 },
          {id: 7, nome: 'Herdeiros Del Marques de Riscal', classificacao: 'Tinto', uva: 'Cabernet Sauvignon', fabricante: 'Riscal', paisOrigem: 'Espanha', anoSafra: 2007 },
          {id: 8, nome: 'Herdeiros Del Marques de Riscal', classificacao: 'Tinto', uva: 'Cabernet Sauvignon', fabricante: 'Riscal', paisOrigem: 'Espanha', anoSafra: 2007 },
          {id: 9, nome: 'Herdeiros Del Marques de Riscal', classificacao: 'Tinto', uva: 'Cabernet Sauvignon', fabricante: 'Riscal', paisOrigem: 'Espanha', anoSafra: 2007 },
          {id: 10, nome: 'Herdeiros Del Marques de Riscal', classificacao: 'Tinto', uva: 'Cabernet Sauvignon', fabricante: 'Riscal', paisOrigem: 'Espanha', anoSafra: 2007 }
    ];
    return {vinhos};
  }
}
