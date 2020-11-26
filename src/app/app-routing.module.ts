import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//importados manualmente
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ListadoPrestamistasComponent } from './listados/listado-prestamistas/listado-prestamistas.component';
import { ListadoPrestatariosComponent } from './listados/listado-prestatarios/listado-prestatarios.component';
import { LogearseComponent } from './login/logearse/logearse.component';
import { HistorialPrestamosComponent } from './prestamos/historial-prestamos/historial-prestamos.component';
import { PrestamosPendientesComponent } from './prestamos/prestamos-pendientes/prestamos-pendientes.component';
import { RegistrarPrestamosComponent } from './prestamos/registrar-prestamos/registrar-prestamos.component';
import { RegistrarSolicitudPrestamoComponent } from './prestamos/registrar-solicitud-prestamo/registrar-solicitud-prestamo.component';
import { ComomepaganComponent } from './prestape-info/comomepagan/comomepagan.component';
import { ComopagoComponent } from './prestape-info/comopago/comopago.component';
import { ComoprestoComponent } from './prestape-info/comopresto/comopresto.component';
import { NuestrahistoriaComponent } from './prestape-info/nuestrahistoria/nuestrahistoria.component';
import { AgregarfondosUsuarioComponent } from './usuario/agregarfondos-usuario/agregarfondos-usuario.component';
import { VerInfoUsuarioComponent } from './usuario/ver-info-usuario/ver-info-usuario.component';
import { VerbilleteraUsuarioComponent } from './usuario/verbilletera-usuario/verbilletera-usuario.component';


const routes: Routes = [
  { path: '', component: LogearseComponent },
  { path: 'menu', component: SidenavComponent, children: [
    { path: 'page-1', component: RegistrarPrestamosComponent },
    { path: 'page-2', component: RegistrarSolicitudPrestamoComponent },
    { path: 'page-3', component: HistorialPrestamosComponent },
    { path: 'page-4', component: PrestamosPendientesComponent },
    { path: 'page-5', component: ListadoPrestatariosComponent },
    { path: 'page-6', component: ListadoPrestamistasComponent },
    { path: 'page-7', component: VerInfoUsuarioComponent },
    { path: 'page-8', component: AgregarfondosUsuarioComponent },
    { path: 'page-9', component: VerbilleteraUsuarioComponent },
    { path: 'page-10', component: NuestrahistoriaComponent },
    { path: 'page-11', component: ComopagoComponent },
    { path: 'page-12', component: ComoprestoComponent },
    { path: 'page-13', component: ComomepaganComponent },
    { path: 'login', component: LogearseComponent },
    { path: 'registrarse', component: RegistrarPrestamosComponent }
  ]}
  ];

/*
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listado', component: AppComponent }
];*/



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
