import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import {NgModule } from '@angular/core';


const rotas: Routes = [
    {path: '', component: LoginComponent},
    {path: 'inbox', component: CaixaDeEntradaComponent},
    {path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
    {path: '**', redirectTo: 'inbox'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [ RouterModule ]
})
export class ModuloRoteamento{}