import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { VinhosService } from './services/vinhos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VinhosComponent } from './components/vinhos/vinhos.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VinhoApi } from './vinho-api';
import { HttpModule } from '@angular/http';
import { CadastroVinhoComponent } from './components/cadastro-vinho/cadastro-vinho.component';
import { DetalhesVinhosComponent } from './components/detalhes-vinhos/detalhes-vinhos.component';
import { NotificacaoService } from './services/notificacao.service';
import { NotificacaoComponent } from './components/notificacao/notificacao.component';

import { VinhoFiltro } from './filters/vinho-filtro';
// Modulos MAterial 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    CadastroVinhoComponent,
    DetalhesVinhosComponent,
    NotificacaoComponent,
    VinhoFiltro
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(VinhoApi),
    AppRoutingModule,
    BrowserAnimationsModule,  // Inicio de modulos Material 
    MatButtonModule,
    MatCheckboxModule
    
  ],
  providers: [ VinhosService, NotificacaoService, VinhoFiltro],
  bootstrap: [AppComponent]
})
export class AppModule { }
