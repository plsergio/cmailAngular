import { Component } from "@angular/core";
import { PageDataService } from 'src/app/services/page.service';

@Component ({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css' , './header-search.css']
})
export class HeaderComponent{

    //restante do código omitido
    tituloDaPagina = 'CMail'; //Nova propriedade

    //Injeção de PageDataService
    constructor(private pageService: PageDataService){
        //assinando titulo de pageDataService
        this.pageService
            .titulo
            .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    private _isMenuOpen = false;

    get isMenuOpen(){
        return this._isMenuOpen
    }

    toggleMenu(){
        this._isMenuOpen = !this._isMenuOpen
    }
}