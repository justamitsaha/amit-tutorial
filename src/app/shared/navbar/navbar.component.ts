import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() hamburger_output = new EventEmitter<Boolean>();
  is_collapsed: boolean = false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  // changeHamburger(): void {
  //   if (this.is_collapsed == false) {
  //     this.is_collapsed = true;
  //   } else {
  //     this.is_collapsed = false;
  //   }
  // }

  changeHamburger() {
    if (this.is_collapsed == false) {
      this.is_collapsed = true;
    } else {
      this.is_collapsed = false;
    }
    this.hamburger_output.emit(this.is_collapsed);
  }
}
