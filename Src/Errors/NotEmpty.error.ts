export class NotEmpty extends Error {
    public property: string;
    public message: string;

    constructor(property: string) {
        super();
        this.message = `Por favor informe um(a) ${property}`
    }
}