import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;

  emailList = [];
  email = {destinatario: '', assunto: '',  conteudo: ''}

  constructor(private emailService: EmailService){} //injetar emailservice

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) return;

    this.emailService
        .enviar(this.email)
        .subscribe(
          emailApi => {
            //fazendo todas as outras operações após o ok da api
            this.emailList.push(emailApi)
            this.email = { destinatario: '', assunto: '', conteudo:''}
            formEmail.reset();
          }
          ,erro => console.error(erro)
        )

  }

}
