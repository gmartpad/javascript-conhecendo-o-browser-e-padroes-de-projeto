class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event){

        event.preventDefault();        

        // 2016-11-16
        let data = new Date(
            this._inputData.value
            .split("-")
            .map((value, index)=>{
                return value
            })
        )
        console.log(data);

        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

        // adicionar a negociação em uma lista

    }

}