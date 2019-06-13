import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { Routes, RouterModule} from '@angular/router';

const rotasCadastro: Routes = [
    {path: '', component: CadastroComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(rotasCadastro)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroRoutingModule { }
