import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../api/pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalentosService {

  url = 'http://localhost:8084/talentos'

  constructor(private httpClient: HttpClient) { }

  public cadastrarTalento(talento: Pessoa): Observable<Pessoa>{
    return this.httpClient.post<Pessoa>(this.url, talento);
  }
}
