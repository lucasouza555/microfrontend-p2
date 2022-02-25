import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comp1',
    templateUrl: './comp1.component.html'
})
export class Comp1Component {

    itens = [
        {
            codigo:1,
            descricao:'Camisa do Bayern',
            valor: 128.90
        },
        {
            codigo:2,
            descricao:'Camisa do Real madrid',
            valor: 279.90
        },
        {
            codigo:3,
            descricao:'Camisa do Barcelona',
            valor: 99.90
        },
        {
            codigo:4,
            descricao:'Camisa do PSG',
            valor: 219.90
        }
    ]
}