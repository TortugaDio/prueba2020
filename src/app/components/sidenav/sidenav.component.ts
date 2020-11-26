import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
          label: 'Prestamos',
          icon:'pi pi-dollar',
          items: [
              {
                  label: 'Nuevo',
                  icon:'pi pi-fw pi-plus',
                  items: [
                      {
                      label: 'Registrar de prestamos',
                      icon:'pi pi-money-bill',
                      routerLink: ['page-1']
                      },
                      {
                      label: 'Registrar de solicitud de prestamo',
                      icon:'pi pi-money-bill',
                      routerLink: ['page-2']
                      }
                  ]
              },
              {
                  label: 'Historial de prestamos',
                  icon:'pi pi-list',
                  routerLink: ['page-3']
              },
              {
                  label: 'Prestamos pendientes',
                  icon:'pi pi-exclamation-circle',
                  routerLink: ['page-4']
              }
          ]
          },
          {
          label: 'Listados',
          icon:'pi pi-fw pi-pencil',
          items: [
              {
                  label: 'Listado de prestatarios',
                  icon:'pi pi-fw pi-align-left',
                  routerLink: ['page-5']
              },
              {
                  label: 'Listado de Prestamistas',
                  icon:'pi pi-fw pi-align-right',
                  routerLink: ['page-6']
              }
          ]
          },
          {
          label: 'Usuario',
          icon:'pi pi-fw pi-user',
          items: [
              {
                  label: 'Ver mi informacion',
                  icon:'pi pi-id-card',
                  routerLink: ['page-7']
              },
              {
                  label: 'Mi billetera',
                  icon:'pi pi-wallet',
                  items: [
                      {
                      icon:'pi pi-credit-card',
                      label: 'Agregar fondos a la billetera',
                      routerLink: ['page-8']
                      },
                      {
                        icon:'pi pi-sun',
                        label: 'Ver mi billetera',
                        routerLink: ['page-9']
                        }
                  ]
              }
          ]
          },
          {
          label: 'Presta.pe',
          icon:'pi pi-compass',
          items: [
              {
                  label: 'Nuestra historia',
                  icon:'pi pi-home',
                  routerLink: ['page-10']
              },
              {
                  label: 'Acerca de...',
                  icon:'pi pi-question-circle',
                  items: [
                      {
                      label: 'Metodos de pago',
                      icon:'pi pi-fw pi-calendar-minus',
                      routerLink: ['page-11']
                      },
                      {
                        label: '¿Como puedo prestar?',
                        icon:'pi pi-fw pi-calendar-minus',
                        routerLink: ['page-12']
                        },
                        {
                            label: '¿Como me van a pagar?',
                            icon:'pi pi-fw pi-calendar-minus',
                            routerLink: ['page-13']
                            }
                  ]
              }
          ]
          }
      ]
  }
}
