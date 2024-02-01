import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'cadastrar', data: {breadcrumb: 'Cadastrar Talento'},loadChildren: () => import('./talentos-cadastrar/talentos-cadastrar.module').then(m => m.TalentosCadastrarModule) },
    { path: 'buscar', data: {breadcrumb: 'Buscar Talento'},loadChildren: () => import('./talentos-buscar/talentos-buscar.module').then(m => m.TalentosBuscarModule) },
  ])],
  exports: [RouterModule]
})
export class TalentosRoutingModule { }
