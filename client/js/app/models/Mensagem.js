class Mensagem {

    constructor(texto='') {

        this.texto = texto;

    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        return this._texto = texto;
    }

}