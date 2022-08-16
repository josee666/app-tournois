import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  events: string[] = [];  // event open, close on menu
  opened= false;

  accueilIsOn= true;
  inscriptionIsOn = false;
  detailsTournoisIsOn = false;
  detailsLibreIsOn = false;
  nousJoindreIsOn= false;
  foireIsOn = false;
  horaireIsOn = false

  constructor() { }


  ngOnInit(): void {
  }

  onClicBackHome() {
    console.log('back home')
    this.accueilIsOn= true;
    this.inscriptionIsOn = false;
    this.detailsTournoisIsOn = false;
    this.detailsLibreIsOn = false;
    this.nousJoindreIsOn = false;
    this.foireIsOn = false;
    this.horaireIsOn = false;
  }

  onClicMenuInscription() {
    console.log('Inscription')
    this.accueilIsOn= false;
    this.inscriptionIsOn = true;
    this.detailsTournoisIsOn = false;
    this.detailsLibreIsOn = false;
    this.nousJoindreIsOn = false;
    this.foireIsOn = false;
    this.horaireIsOn = false;
  
  }

  onClicMenuDetailTournois() {
    console.log('Details')
    this.accueilIsOn= false;
    this.inscriptionIsOn = false;
    this.detailsTournoisIsOn = true;
    this.detailsLibreIsOn = false;
    this.nousJoindreIsOn = false;
    this.foireIsOn = false;
    this.horaireIsOn = false;
  }
  onClicMenuDetailLibre() {
    this.accueilIsOn= false;
    this.inscriptionIsOn = false;
    this.detailsTournoisIsOn = false;
    this.detailsLibreIsOn = true;
    this.nousJoindreIsOn = false;
    this.foireIsOn = false;
    this.horaireIsOn = false;
  }

  onClicMenuFoire() {
    console.log('Foire questions')
    this.accueilIsOn= false;
    this.inscriptionIsOn = false;
    this.detailsTournoisIsOn = false;
    this.detailsLibreIsOn = false;
    this.nousJoindreIsOn = false;
    this.foireIsOn = true;
    this.horaireIsOn = false;
  }

  onClicMenuHoraire() {
    console.log('horraire')
    this.accueilIsOn= false;
    this.inscriptionIsOn = false;
    this.detailsTournoisIsOn = false;
    this.detailsLibreIsOn = false;
    this.nousJoindreIsOn = false;
    this.foireIsOn = false;
    this.horaireIsOn = true;
  }
  onClicMenuNousJoindre() {
    console.log('nous joindre questions')
    this.accueilIsOn= false;
    this.inscriptionIsOn = false;
    this.detailsTournoisIsOn = false;
    this.detailsLibreIsOn = false;
    this.nousJoindreIsOn = true;
    this.foireIsOn = false;
    this.horaireIsOn = false;
  }

  eventHandler(event: any) {
    console.log('event handler');
    console.log(event)
  }

}
