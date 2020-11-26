
import { SolicitudCredito} from 'src/app/clases/SolicitudCredito';
import { PrestapeService } from 'src/app/prestape.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-prestamistas',
  templateUrl: './listado-prestamistas.component.html',
  styleUrls: ['./listado-prestamistas.component.css']
})
export class ListadoPrestamistasComponent implements OnInit {


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

  
  totalRecords: number = 20;

  cols: any[];

  loading: boolean;

  ngOnInit() {

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


  listarSolicitudCreditos() {
    this.PrestapeService.getSolicitudCreditos().subscribe(result => {
     this.listaSolicitudCredito = result;
     this.loading = false;
     console.log(result)
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
