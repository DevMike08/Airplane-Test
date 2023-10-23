import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-responsive',
  templateUrl: './nav-responsive.component.html',
  styleUrls: ['./nav-responsive.component.scss']
})
export class NavResponsiveComponent {
  isNavbarOpen:boolean = false;

  isInfoOpen:boolean = false 

  isImage1Active:boolean = true;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.isImage1Active = !this.isImage1Active;
    this.isInfoOpen = false
  }
  toggleinfo() {
    this.isInfoOpen = !this.isInfoOpen;
  }
}
