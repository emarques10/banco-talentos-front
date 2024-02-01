import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasCadastrarComponent } from './vagas-cadastrar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: VagasCadastrarComponent }
  ])],
  exports: [RouterModule]
})
export class VagasCadastrarRoutingModule { }
