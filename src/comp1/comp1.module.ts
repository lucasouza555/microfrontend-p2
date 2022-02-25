import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompSemRotaModule } from 'src/comp-sem-rota/comp-sem-rota.module';
import { Comp1Component } from './comp1.component';

const routes:Routes = [
    {
        path: '',
        component: Comp1Component
    }
]

@NgModule({
    declarations: [
        Comp1Component
    ],
    imports: [
        CommonModule,
        CompSemRotaModule,
        RouterModule.forChild(routes)
    ]
})
export class Comp1Module {
    
}