import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showMenu: boolean = false;
  showMoonFill: boolean = false;

  menuShow() {
    this.showMenu = true;
  }

  menuHidden() {
    const menuItems = document.querySelector('#menu');
    const menuButtonSpans = document.querySelectorAll('#menu-button span');
    //Open Menu
    menuItems?.classList.toggle('hidden');
    menuButtonSpans.forEach((span) => {
      span.classList.toggle('animado');
    });
    this.showMenu = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    let w = event.target.innerWidth;
    if (w > 1024) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }
}
