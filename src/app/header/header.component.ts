import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output () clicMenuEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  clicMenu() {
    console.log('clic menu')
    this.clicMenuEvent.emit(true);

  }
}
