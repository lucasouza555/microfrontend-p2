import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Item {
    codigo: number;
    descricao: string;
    valor:number;
}

export interface Result {
    content: Mensagem[];
}

export interface Mensagem {
    id: number;
    titulo: string;
    mensagem: string;
    dataCriacao: string;
}

@Component({
    selector: 'comp-sem-rota',
    templateUrl: './comp-sem-rota.component.html'
})
export class CompSemRotaComponent {
    
    @Input()
    itens:Item[];

    @Output()
    teste = new EventEmitter<any>();

    mensagens: Mensagem[] = [];

    // constructor(private _http: HttpClient) {

    // }

    // ngOnInit() {
    //     this._http.get<Result>('http://localhost:8080/topicos').subscribe(result => {
    //         this.mensagens = result?.content || [];
    //     });
    // }

    onClick() {
        this.teste.emit({
            a: 'Click no botão teste do projeto 2!',
            b: [
                {
                    c: 12
                },
                {
                    d: 15
                }
            ]
        });
    }
}