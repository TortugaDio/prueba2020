export class SolicitudCredito {
    usuario_nombre: string;
    solicitud_prestamocod: number;
    solicitud_prestamousuariocod: number;
    solicitud_prestamomonto: number;
    solicitud_prestamointeres: number;
    solicitud_prestamocuotas: number;
}

export class SolicitudCreditoRequest{
    solicitud_prestamocod: number;
    solicitud_prestamousuariocod: number;
    solicitud_prestamomonto: number;
    solicitud_prestamointeres: number;
    solicitud_prestamocuotas: number;
  
    constructor(solicitud_prestamocod: number,
        solicitud_prestamousuariocod: number,
        solicitud_prestamomonto: number,
        solicitud_prestamointeres: number,
        solicitud_prestamocuotas: number){
        this.solicitud_prestamocod = solicitud_prestamocod
        this.solicitud_prestamousuariocod = solicitud_prestamousuariocod
        this.solicitud_prestamomonto = solicitud_prestamomonto
        this.solicitud_prestamointeres = solicitud_prestamointeres
        this.solicitud_prestamocuotas = solicitud_prestamocuotas 
      }
  }