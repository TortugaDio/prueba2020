import { Credito} from 'src/app/clases/Credito';
import { PrestapeService } from 'src/app/prestape.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historial-prestamos',
  templateUrl: './historial-prestamos.component.html',
  styleUrls: ['./historial-prestamos.component.css']
})
export class HistorialPrestamosComponent implements OnInit {

  constructor(
    private PrestapeService: PrestapeService,
    private router: Router,

    private messageService: MessageService,
  ) { }

  showResponse(event) {
    this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
  }

  credito: Credito = new Credito();
  titulo: string;
  currentIdVal: number;
  currentDescriptionVal: string;
  currentPriceVal: number;
  //agregado hoy 17/11
  listaCredito: Credito[];
  listaTipoDocumento: SelectItem[] = [];

  
  totalRecords: number = 20;

  cols: any[];

  loading: boolean;


  ngOnInit(){

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

  listarCreditos() {
    this.PrestapeService.getCreditos().subscribe(result => {
     this.listaCredito = result;
     this.loading = false;
     console.log(result)
   })
  
 }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;
    this.listarCreditos();

  }
  buscar() {
    this.loading = false;
    this.listarCreditos();
  }

  irahome() {
    console.log("homeeee")
    this.router.navigate(['home'], { skipLocationChange: true });
  }

}
