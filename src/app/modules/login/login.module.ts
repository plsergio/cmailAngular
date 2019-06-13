import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { LoginRoutingModule } from './login-routing.modules';
import { LoginComponent } from './login.component';
import { CmailFormGroupModule } from '../cmail-form-group/cmail-form-group.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CmailFormGroupModule,
    SharedComponentsModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
