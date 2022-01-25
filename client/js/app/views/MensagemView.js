class MensagemView extends View {

    constructor(elementoPai){
        super(elementoPai);
    }
    
    template(model) {
        return model.texto ? `<p class="alert alert-info>${model.texto}</p>"` : `<p></p>`;
    }

}