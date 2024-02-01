import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { Estado } from 'src/app/api/estado';
import { Habilidade } from 'src/app/api/habilidade';
import { Endereco, Pessoa } from 'src/app/api/pessoa';
import { EnderecoService } from 'src/app/service/endereco.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TalentosService } from 'src/app/service/talentos.service';

@Component({
  selector: 'app-talentos-cadastrar',
  templateUrl: './talentos-cadastrar.component.html',
  providers: [MessageService]
})
export class TalentosCadastrarComponent implements OnInit{

  talentosForm: FormGroup;
  talento: Pessoa = new Pessoa();
  habilidades;

  countries: any[] = [];
  estadosFiltrados: any[] = [];
  
  
  habilidadesLista: Habilidade[] = [];
  habilidadesSelecionadas: any[] = [];
  enderecos: Endereco[] = [];
  estados: Estado[] = [];
  uploadedFiles: any[] = [];

  constructor(private formBuilder: FormBuilder, 
    private talentosService: TalentosService, 
    private habilidadesService: HabilidadesService,
    private enderecoService: EnderecoService,
    private messageService: MessageService){
    this.talentosForm = this.formBuilder.group({
      nome:['',Validators.required], 
      sobrenome:[''],
      habilidades: [[], Validators.required],
      endereco: this.formBuilder.group({
        rua:[''],
        estado:[''],
        cidade:[''],
        cep:['']
      }),
      linkedin:['']      
    });
  }
  
  ngOnInit(): void {
    this.buscarHabilidades();
    this.buscarEstados();
  }

  cadastrar(){
    return this.talentosService.cadastrarTalento(this.talentosForm.value).subscribe(res => {
      if(res){
        this.messageService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Candidato Adicionado' });
      }
    })
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

  onUpload(event: any) {
    for (const file of event.files) {
        //this.uploadedFiles.push(file);
    }  
    //this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  filtrarEstados(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.estados.length; i++) {
        const estado = this.estados[i];
        if (estado.siglaEstado.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(estado.siglaEstado);
        }
    }

    this.estadosFiltrados = filtered;
}

}
