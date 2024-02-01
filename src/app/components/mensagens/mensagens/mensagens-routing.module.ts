import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensagensComponent } from './mensagens.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MensagensComponent }
  ])],
  exports: [RouterModule]
})
export class MensagensRoutingModule { }
