import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { VinhosComponent } from '../components/vinhos/vinhos.component';
import { CadastroVinhoComponent } from '../components/cadastro-vinho/cadastro-vinho.component';
import { DetalhesVinhosComponent } from '../components/detalhes-vinhos/detalhes-vinhos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/vinhos',
    pathMatch: 'full'
  },
  {
    path: 'vinhos',
    component: VinhosComponent
  },
  {
    path: 'cadastro-vinho',
    component: CadastroVinhoComponent
  },
  {
    path: 'cadastro-vinho/:id',
    component: CadastroVinhoComponent
  },
  {
  path: 'detalhes-vinho/:id',
  component: DetalhesVinhosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
