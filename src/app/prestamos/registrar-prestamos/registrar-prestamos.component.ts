import { SolicitudCredito, SolicitudCreditoRequest } from 'src/app/clases/SolicitudCredito';
import { PrestapeService } from 'src/app/prestape.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-prestamos',
  templateUrl: './registrar-prestamos.component.html',
  styleUrls: ['./registrar-prestamos.component.css']
})
export class RegistrarPrestamosComponent implements OnInit {
  
  constructor(
    private PrestapeService: PrestapeService,
    private router: Router,

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


  ngOnInit() {

    this.titulo = "Registrar Solicitud de Credito/Préstamo";
    this.listaTipoDocumento.push({ label: ' -- Seleccione -- ', value: null });
    this.listaTipoDocumento.push({ label: ' DNI ', value: 1 });
    this.listaTipoDocumento.push({ label: ' PASAPORTE', value: 2 });
    this.listaTipoDocumento.push({ label: ' CARNET EXTRANJERIA ', value: 3 });

    //se agregó
    // this.getCurrentArticles();
    //this.listarPrestamos();
    //this.loadCustomers({});
   // this.solicitudprestamo.solicitud_prestamocod = 11;
    console.log("filtro 1")
    
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
      //this.listarSolicitudCreditos();
    })
  }




}
