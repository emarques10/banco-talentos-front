import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado } from 'src/app/api/estado';
import { Habilidade } from 'src/app/api/habilidade';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TalentosService } from 'src/app/service/talentos.service';
import { EnderecoService } from 'src/app/service/endereco.service';

@Component({
  selector: 'app-talentos-buscar',
  templateUrl: './talentos-buscar.component.html',
})
export class TalentosBuscarComponent implements OnInit{

  talentosForm: FormGroup;
  habilidadesLista: Habilidade[] = [];
  estados: Estado[] = [];
  valSlider = 50;

  constructor(private formBuilder: FormBuilder, private talentosService: TalentosService, 
    private habilidadesService: HabilidadesService, 
    private enderecoService: EnderecoService){
    this.talentosForm = this.formBuilder.group({
      nome:[''], 
      sobrenome:[''],
      habilidades: [[]],
      estado: [[]],
      faixasalarialInicial:[],
      faixasalarialFinal:[],
    });
  }
  
  ngOnInit(): void {
    this.buscarHabilidades();
    this.buscarEstados();
  }



  pesquisar(){

  }

  buscarHabilidades(){
    this.habilidadesService.buscarHabilidades().subscribe(res => {
      this.habilidadesLista = res;
    })
  }

  buscarEstados(){
    this.enderecoService.buscarEstados().subscribe(res => {
      this.estados = res;
    })
  }

}
