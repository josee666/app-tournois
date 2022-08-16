import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AccueilComponent } from './accueil/accueil.component';
import {MatButtonModule} from '@angular/material/button';
import { InscriptionComponent } from './inscription/inscription.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { NousJoindreComponent } from './nous-joindre/nous-joindre.component';
import { FoireComponent } from './foire/foire.component';
import { DetailLibreComponent } from './detail-libre/detail-libre.component';
import { HorraireComponent } from './horraire/horraire.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    AccueilComponent,
    InscriptionComponent,
    DetailComponent,
    HeaderComponent,
    NousJoindreComponent,
    FoireComponent,
    DetailLibreComponent,
    HorraireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
