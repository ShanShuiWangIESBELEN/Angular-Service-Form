export interface Evento {
    id: number;
    empleado: string;
    cliente: string;
    fechaEvento: Date;
    message: string;
    type: 'log' | 'warn' | 'error';
    fechaRegistro: Date;
}
