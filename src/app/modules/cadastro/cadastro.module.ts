import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CmailFormGroupModule } from '../cmail-form-group/cmail-form-group.module';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CmailFormGroupModule,
    SharedComponentsModule,
    CadastroRoutingModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
