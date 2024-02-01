import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'cadastrar', data: {breadcrumb: 'Cadastrar Vagas'},loadChildren: () => import('./vagas-cadastrar/vagas-cadastrar.module').then(m => m.VagasCadastrarModule) },
    { path: 'buscar', data: {breadcrumb: 'Buscar Vagas'},loadChildren: () => import('./vagas-buscar/vagas-buscar.module').then(m => m.VagasBuscarModule) },
  ])],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
