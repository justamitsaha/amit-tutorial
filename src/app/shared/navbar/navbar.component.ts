import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  is_collapsed: boolean = false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeHamburger(): void {
    if (this.is_collapsed == false) {
      this.is_collapsed = true;
    } else {
      this.is_collapsed = false;
    }
  }
}
