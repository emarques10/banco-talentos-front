import { Habilidade } from "./habilidade";

export class Pessoa {
    id?: number;
    nome?: string;
    sobrenome?: string;
    endereco?: Endereco = new Endereco();
    telefones?: Telefone[];
    emails?: Email[];
    habilidades?: Habilidade[];
}

export class Endereco {
    id?: number;
    rua?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
}

export class Telefone {
    id?: number;
    rua?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
}

export class Email {
    id?: number;
    rua?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
}