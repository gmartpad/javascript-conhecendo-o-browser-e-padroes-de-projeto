class View {

    constructor(elementoPai) {

        this._elementoPai = elementoPai

    }

    template() {
        throw new Error("Método Template deve ser implementado");
    }

    update(model) {

        this._elementoPai.innerHTML = this.template(model);

    }

}