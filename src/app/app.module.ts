import { MessageService } from 'primeng/api';
import { CaptchaModule } from 'primeng/captcha';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrestapeService } from './prestape.service';
import { InputTextModule } from 'primeng/inputtext';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//iportados por brayanula
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { RegistrarPrestamosComponent } from './prestamos/registrar-prestamos/registrar-prestamos.component';
import { RegistrarSolicitudPrestamoComponent } from './prestamos/registrar-solicitud-prestamo/registrar-solicitud-prestamo.component';
import { HistorialPrestamosComponent } from './prestamos/historial-prestamos/historial-prestamos.component';
import { PrestamosPendientesComponent } from './prestamos/prestamos-pendientes/prestamos-pendientes.component';
import { ListadoPrestatariosComponent } from './listados/listado-prestatarios/listado-prestatarios.component';
import { ListadoPrestamistasComponent } from './listados/listado-prestamistas/listado-prestamistas.component';
import { VerInfoUsuarioComponent } from './usuario/ver-info-usuario/ver-info-usuario.component';
import { AgregarfondosUsuarioComponent } from './usuario/agregarfondos-usuario/agregarfondos-usuario.component';
import { VerbilleteraUsuarioComponent } from './usuario/verbilletera-usuario/verbilletera-usuario.component';
import { NuestrahistoriaComponent } from './prestape-info/nuestrahistoria/nuestrahistoria.component';
import { ComopagoComponent } from './prestape-info/comopago/comopago.component';
import { ComoprestoComponent } from './prestape-info/comopresto/comopresto.component';
import { ComomepaganComponent } from './prestape-info/comomepagan/comomepagan.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { LogearseComponent } from './login/logearse/logearse.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NgxCaptchaModule } from 'ngx-captcha';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PrestamosComponent,
    RegistrarPrestamosComponent,
    RegistrarSolicitudPrestamoComponent,
    HistorialPrestamosComponent,
    PrestamosPendientesComponent,
    ListadoPrestatariosComponent,
    ListadoPrestamistasComponent,
    VerInfoUsuarioComponent,
    AgregarfondosUsuarioComponent,
    VerbilleteraUsuarioComponent,
    NuestrahistoriaComponent,
    ComopagoComponent,
    ComoprestoComponent,
    ComomepaganComponent,
    RegistrarseComponent,
    LogearseComponent,
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    PanelMenuModule,
    //agregado por pedrula
    MessagesModule,
    CaptchaModule,
    ToastModule,
    NgxCaptchaModule
  ],
  providers: [

    PrestapeService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
