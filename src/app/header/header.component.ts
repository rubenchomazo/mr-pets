import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Concentrados',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Juguetes',
            icon: 'pi pi-fw pi-plus',
          },
        ],
      },
      {
        label: 'Servicios',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Baña a tu mascota',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Peluqueria',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Veterinaria',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Vacunación',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Quienes somos',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Acerca de mr-pets',
            icon: 'pi pi-fw pi-user-plus',
          },
        ],
      },
    ];
  }
}
