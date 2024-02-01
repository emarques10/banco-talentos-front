import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentosBuscarComponent } from './talentos-buscar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: TalentosBuscarComponent }
  ])],
  exports: [RouterModule]
})
export class TalentosBuscarRoutingModule { }