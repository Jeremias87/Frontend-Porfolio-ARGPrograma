export class Skills {
    id?: number;
    nombreS: string;
    porcentaje: number;

    constructor(nombreS: string, porcentaje: number) {
        this.nombreS = nombreS;
        this.porcentaje = porcentaje;
    }
}
