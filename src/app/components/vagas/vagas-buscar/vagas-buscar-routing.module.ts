import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasBuscarComponent } from './vagas-buscar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: VagasBuscarComponent }
  ])],
  exports: [RouterModule]
})
export class VagasBuscarRoutingModule { }
