import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CmailFormGroupComponent } from './cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-field.directive';

@NgModule({
  declarations: [
    CmailFormGroupComponent,
    CmailFormFieldDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmailFormGroupComponent,
    CmailFormFieldDirective,
  ]
})
export class CmailFormGroupModule { }
