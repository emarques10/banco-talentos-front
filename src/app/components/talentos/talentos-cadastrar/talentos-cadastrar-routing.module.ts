import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentosCadastrarComponent } from './talentos-cadastrar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: TalentosCadastrarComponent }
  ])],
  exports: [RouterModule]
})
export class TalentosCadastrarRoutingModule { }
