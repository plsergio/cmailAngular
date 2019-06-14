import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { ModuloRoteamento } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SharedComponentsModule } from './components/shared-components.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';
import { FiltroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';

registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CaixaDeEntradaComponent,
    FiltroPorAssunto
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    HttpClientModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
