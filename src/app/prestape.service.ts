import { SolicitudCredito, SolicitudCreditoRequest } from './clases/SolicitudCredito';
import { Credito } from './clases/Credito';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestapeService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080';
  private articleUrl: string = this.baseUrl + '/article/v1/';
  private prestamoUrl: string = this.baseUrl + '/prestamo/v1/';
  private solicitudcreditoUrl: string = this.baseUrl + '/solicitudcredito/v1/';
  private creditoUrl: string = this.baseUrl + '/credito/v1/';

  //en ves de llamarlo al postman, se llama desde aquí así
 
  //lo agregué hoy 21/11
  getSolicitudCreditos(): Observable<SolicitudCredito[]> {
    return this.http.get<SolicitudCredito[]>(this.solicitudcreditoUrl+"joinusuario");
  }

    //agregado 23/11
  getCreditos(): Observable<Credito[]> {
      return this.http.get<Credito[]>(this.creditoUrl+"joinusuario");
  }

  //lo agregué hoy 21/11
  RegistrarSolicitudCredito(body: SolicitudCreditoRequest): Observable<SolicitudCredito> {
    console.log("ga2"+body);
    let httpOptions = {
      headers: new HttpHeaders({ 'Context-Type': 'applicaction/json' })
    };
    
    return this.http.post<SolicitudCredito>(this.solicitudcreditoUrl, body, httpOptions);
  }


}




