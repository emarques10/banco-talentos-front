import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidade } from '../api/habilidade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  url = 'http://localhost:8084/habilidades'

  constructor(private httpClient: HttpClient) { }

  public cadastrarHabilidade(habilidade: Habilidade): Observable<Habilidade>{
    return this.httpClient.post<Habilidade>(this.url, habilidade);
  }

  public buscarHabilidades(): Observable<Habilidade[]>{
    return this.httpClient.get<Habilidade[]>(this.url);
  }
}
