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
            .map((value, index)=>value)
        )
        console.log(data);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        let diaMesAno = negociacao.data.getDate() + "/" + (negociacao.data.getMonth() + 1) + "/" + negociacao.data.getFullYear()

        console.log(diaMesAno)

        // adicionar a negociação em uma lista

    }

}