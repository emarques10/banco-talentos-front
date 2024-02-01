import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidade } from '../api/habilidade';
import { Observable } from 'rxjs';
import { Estado } from '../api/estado';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  url = 'http://localhost:8084/endereco'

  constructor(private httpClient: HttpClient) { }

  public buscarEstados(): Observable<Estado[]>{
    return this.httpClient.get<Estado[]>(`${this.url}/estados`);
  }
}
