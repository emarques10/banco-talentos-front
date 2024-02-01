import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesCadastrarComponent } from './habilidades-cadastrar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: HabilidadesCadastrarComponent }
  ])],
  exports: [RouterModule]
})
export class HabilidadesCadastrarRoutingModule { }
