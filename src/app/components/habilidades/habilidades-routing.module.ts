import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'cadastrar', data: {breadcrumb: 'Cadastrar Habilidade'},loadChildren: () => import('./habilidades-cadastrar/habilidades-cadastrar.module').then(m => m.HabilidadesCadastrarModule) },
  ])],
  exports: [RouterModule]
})
export class HabilidadesRoutingModule { }
