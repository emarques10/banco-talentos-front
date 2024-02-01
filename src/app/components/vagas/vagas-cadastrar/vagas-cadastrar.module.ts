import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasCadastrarRoutingModule } from './vagas-cadastrar-routing.module';
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
import { VagasCadastrarComponent } from './vagas-cadastrar.component';


@NgModule({
  declarations: [ VagasCadastrarComponent ],
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
    VagasCadastrarRoutingModule
  ]
})
export class VagasCadastrarModule { }
