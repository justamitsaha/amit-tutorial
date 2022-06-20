import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() hamburger_output = new EventEmitter<boolean>();
  @Input() sidebar_state: boolean = false;
  is_collapsed: boolean = false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    this.is_collapsed = this.sidebar_state;
  }

  ngOnChanges(changes: any) {
    this.is_collapsed = this.sidebar_state;
  }

  changeHamburger() {
    if (this.is_collapsed == false) {
      this.is_collapsed = true;
    } else {
      this.is_collapsed = false;
    }
    this.hamburger_output.emit(this.is_collapsed);
  }

  hideHamburger() {
    this.is_collapsed = false;
    this.hamburger_output.emit(false);
  }
}
