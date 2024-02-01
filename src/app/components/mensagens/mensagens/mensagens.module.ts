import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensagensRoutingModule } from './mensagens-routing.module';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { MensagensComponent } from './mensagens.component';


@NgModule({
  declarations: [ MensagensComponent],
  imports: [
    CommonModule,
    MensagensRoutingModule,
    MessagesModule,
		MessageModule,
		ButtonModule,
		ToastModule,
		InputTextModule
  ]
})
export class MensagensModule { }
