class View {

    constructor(elementoPai) {

        this._elementoPai = elementoPai

    }

    update(model) {

        this._elementoPai.innerHTML = this._template(model);

    }

}