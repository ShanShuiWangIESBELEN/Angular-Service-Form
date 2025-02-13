import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado';

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {

    private url = 'http://localhost:3000/empleados';

    constructor() { }
    /* Eso lo estoy haciendo porque no me funciona el fetch */
    private empleados: Empleado[] = [

        {
            "id": 1,
            "nombre": "Samuel"
        },
        {
            "id": 2,
            "nombre": "Shanshui"
        },
        {
            "id": 3,
            "nombre": "Juan"
        },
        {
            "id": 4,
            "nombre": "David"
        },
        {
            "id": 5,
            "nombre": "Zahira"
        },
        {
            "id": 6,
            "nombre": "Aroa"
        },
        {
            "id": 7,
            "nombre": "Alejandro"
        },
        {
            "id": 8,
            "nombre": "Enzo"
        },
        {
            "id": 9,
            "nombre": "Andrés"
        },
        {
            "id": 10,
            "nombre": "Julián"
        }

    ];
    getEmpleados(): Empleado[] { 
        return this.empleados;
    }

    /* async getAllEmpleados(): Promise<Empleado[]> {
        const data = await fetch(this.url);
        return (await data.json()) ?? [];
    }

    async getEmpleado(id: number): Promise<Empleado | undefined> {
        const data = await fetch(`${this.url}/${id}`);
        return (await data.json()) ?? {};
    } */
}
