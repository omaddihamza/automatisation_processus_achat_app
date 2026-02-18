import {Component, OnInit} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';

import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {

  }

}
