import { SolicitudCredito, SolicitudCreditoRequest } from './clases/SolicitudCredito';
import { PrestapeService } from './prestape.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Presta.pe';

  constructor(
    private PrestapeService: PrestapeService,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    messageService: MessageService,
  ) { messageService }


  solicitudcredito: SolicitudCredito = new SolicitudCredito();
  titulo: string;
  currentIdVal: number;
  currentDescriptionVal: string;
  currentPriceVal: number;
  //agregado hoy 17/11
  listaSolicitudCredito: SolicitudCredito[];
  listaTipoDocumento: SelectItem[] = [];


  totalRecords: number = 20;

  cols: any[];

  loading: boolean;
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.titulo = "Registrar Solicitud de Credito/Préstamo";
    this.listaTipoDocumento.push({ label: ' -- Seleccione -- ', value: null });
    this.listaTipoDocumento.push({ label: ' DNI ', value: 1 });
    this.listaTipoDocumento.push({ label: ' PASAPORTE', value: 2 });
    this.listaTipoDocumento.push({ label: ' CARNET EXTRANJERIA ', value: 3 });

    //se agregó
    // this.getCurrentArticles();
    //this.listarPrestamos();
    this.loadCustomers({});
    // this.solicitudprestamo.solicitud_prestamocod = 11;
    console.log("filtro 1")
  }



  //agregado hoyt 21/11
  listarSolicitudCreditos() {
    this.PrestapeService.getSolicitudCreditos().subscribe(result => {
      this.listaSolicitudCredito = result;
      this.loading = false;
      console.log(result)
    })

  }


  registrarData2() {
    //este es el que imprime la data de la entidad
    console.log(this.solicitudcredito);
    console.log(this.solicitudcredito.solicitud_prestamocod)
    this.PrestapeService.RegistrarSolicitudCredito(
      new SolicitudCreditoRequest(null, this.solicitudcredito.solicitud_prestamousuariocod, this.solicitudcredito.solicitud_prestamomonto,
        this.solicitudcredito.solicitud_prestamointeres, this.solicitudcredito.solicitud_prestamocuotas)
    ).subscribe(postResult => {
      console.log(postResult);
      //se agregó
      this.listarSolicitudCreditos();
    })
  }


  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;
    this.listarSolicitudCreditos();

  }
  buscar() {
    this.loading = false;
    this.listarSolicitudCreditos();
  }

  irahome() {
    console.log("homeeee")
    this.router.navigate(['home'], { skipLocationChange: true });
  }
}
