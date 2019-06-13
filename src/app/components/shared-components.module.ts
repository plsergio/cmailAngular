import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from '../modules/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from '../modules/cmail-form-group/cmail-form-field.directive';

@NgModule({
  declarations: [ // declara componentes e outros
    HeaderComponent,
  ],
  imports: [ // importa módulos
    CommonModule
  ],
  exports: [ //exporta componentes e outros
    HeaderComponent,
  ]
})
export class SharedComponentsModule { }
