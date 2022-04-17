import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  // @Output () clicMenuEvent = new EventEmitter<boolean>();
  // menuIsOpen = false;


  constructor() { }

  ngOnInit(): void {
  }

  // clicMenu() {
  //   console.log('clic menu')
  //   this.menuIsOpen = true;
  //   this.clicMenuEvent.emit(true);

  // }

}
