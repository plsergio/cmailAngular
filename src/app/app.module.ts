import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { ModuloRoteamento } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { SharedComponentsModule } from './components/shared-components/shared-components.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    SharedComponentsModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    HttpClientModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
