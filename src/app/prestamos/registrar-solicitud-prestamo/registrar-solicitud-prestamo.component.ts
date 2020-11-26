import { Component, OnInit } from '@angular/core';
import { SolicitudCredito, SolicitudCreditoRequest } from 'src/app/clases/SolicitudCredito';
import { PrestapeService } from 'src/app/prestape.service';
import { LazyLoadEvent, MessageService, SelectItem, Message } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-solicitud-prestamo',
  templateUrl: './registrar-solicitud-prestamo.component.html',
  styleUrls: ['./registrar-solicitud-prestamo.component.css']
})
export class RegistrarSolicitudPrestamoComponent  implements OnInit {


  isRequired: Boolean = true;
  siteKey:string = '6Lc_eu0ZAAAAACMarJRU6t-HR1dGlK2uAIZUv9wO';
  constructor(
    private PrestapeService: PrestapeService,
    private router: Router,

    private messageService: MessageService,
  ) { }


  showResponse(event) {
    this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  addMultiple() {
    this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
    { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
  }

  clear() {
    this.messageService.clear();
  }


  solicitudcredito: SolicitudCredito = new SolicitudCredito();
  titulo: string;
  //agregado hoy 17/11
  listaSolicitudCredito: SolicitudCredito[];
  listaTipoDocumento: SelectItem[] = [];


  totalRecords: number = 20;

  cols: any[];
  msgs1: Message[];
  loading: boolean;

  ngOnInit(): void {

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
  mostrarMensajeError(data: string) {
    //this.messageService.clear();
    this.messageService.add({ severity: 'error', summary: 'Error: ', detail: data });
    return;
  }
  validaciones() {
    var x: boolean = true;
    if (this.solicitudcredito.solicitud_prestamousuariocod == null) {
      this.mostrarMensajeError('Debe ingresar un codigo de Usuario');
      x = false;
    }

    if (this.solicitudcredito.solicitud_prestamomonto == null) {
      this.mostrarMensajeError('Debe ingresar un Monto');
      x = false;
    }

    if (this.solicitudcredito.solicitud_prestamointeres == null) {
      this.mostrarMensajeError('Debe ingresar el Interés');
      x = false;
    }

    if (this.solicitudcredito.solicitud_prestamocuotas == null) {
      this.mostrarMensajeError('Debe ingresar las Cuotas');
      x = false;
    }

    return x;
  }

  registrarData2() {
        if (this.validaciones() != true) {
        return;
        }
    //este es el que imprime la data de la entidad
    console.log(this.solicitudcredito);
    console.log(this.solicitudcredito.solicitud_prestamocod)
    this.PrestapeService.RegistrarSolicitudCredito(
      new SolicitudCreditoRequest(null,
        this.solicitudcredito.solicitud_prestamousuariocod,
        this.solicitudcredito.solicitud_prestamomonto,
        this.solicitudcredito.solicitud_prestamointeres,
        this.solicitudcredito.solicitud_prestamocuotas)
    ).subscribe(postResult => {
      console.log(postResult);
      //se agregó
      this.messageService.add({ severity: 'success', summary: 'Completado con exito: ', detail: 'Código de la Solicitud de Préstamo: '+postResult.solicitud_prestamocod.toString() });
      this.router.navigate(['menu/page-6'], {skipLocationChange: true});
    })
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;
    // this.listarSolicitudCreditos();
  }

 // showResponse() {
 //   alert("alert kawaii");
 // }


  
}
