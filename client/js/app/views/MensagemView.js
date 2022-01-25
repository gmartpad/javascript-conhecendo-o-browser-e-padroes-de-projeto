class MensagemView {
    
    constructor(elementoPai){

        this._elementoPai = elementoPai

    }

    _template(model) {
        return model.texto ? `<p class="alert alert-info>${model.texto}</p>"` : `<p></p>`;
    }

    update(model) {

        this._elementoPai.innerHTML = this._template(model);

    }
}