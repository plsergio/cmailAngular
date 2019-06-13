import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';

@NgModule({
  declarations: [ // declara cmponentes e outros
    HeaderComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective,
  ],
  imports: [ // importa módulos
    CommonModule
  ],
  exports: [ //exporta compoenentes e outros
    HeaderComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective,
  ]
})
export class SharedComponentsModule { }
