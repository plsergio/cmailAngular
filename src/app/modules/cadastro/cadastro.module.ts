import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
