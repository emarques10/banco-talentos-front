import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Habilidade } from 'src/app/api/habilidade';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-habilidades-cadastrar',
  templateUrl: './habilidades-cadastrar.component.html',
  styleUrl: './habilidades-cadastrar.component.scss'
})
export class HabilidadesCadastrarComponent {

  @ViewChild('habilidadesForm') habilidadesForm: NgForm;
  habilidade: Habilidade = new Habilidade();
  

  constructor(private habilidadeService: HabilidadesService){}

  cadastrar(){
    return this.habilidadeService.cadastrarHabilidade(this.habilidade).subscribe(res => {
      if(res){
        console.log('sucesso');
      }
    })
  }

}
