import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [ // declara componentes e outros
    HeaderComponent, CmailListItemComponent,
  ],
  imports: [ // importa módulos
    CommonModule,
    RouterModule
  ],
  exports: [ //exporta componentes e outros
    HeaderComponent,
    CmailListItemComponent
  ]
})
export class SharedComponentsModule { }
