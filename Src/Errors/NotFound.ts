export class NotFound {
    public property: string;
    public message: string;

    constructor(property: string) {
        this.message = `Nenhum(a) ${property} foi encontrado(a)`
    }
}