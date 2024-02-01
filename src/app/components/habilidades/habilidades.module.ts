import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilidadesRoutingModule } from './habilidades-routing.module';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { HabilidadesCadastrarComponent } from './habilidades-cadastrar/habilidades-cadastrar.component';


@NgModule({
  declarations: [ HabilidadesCadastrarComponent],
  imports: [
    CommonModule,
    FormsModule,
	  AutoCompleteModule,
	  CalendarModule,
	  ChipsModule,
	  DropdownModule,
	  InputMaskModule,
	  InputNumberModule,
	  CascadeSelectModule,
	  MultiSelectModule,
	  InputTextareaModule,
	  InputTextModule,
    HabilidadesRoutingModule
  ]
})
export class HabilidadesModule { }
