class NegociacoesView {

    constructor(elementoPai) {

        this._elementoPai = elementoPai;
    
    }

    _template(model) {

        return `
        
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                ${model.negociacoes.map(i =>
                    `
                        <tr>
                            <th>${DateHelper.dataParaTexto(i.data)}</th>
                            <th>${i.quantidade}</th>
                            <th>${i.valor}</th>
                            <th>${i.volume}</th>
                        </tr>
                    `
                ).join()}
                </tbody>
            
                <tfoot>
                    <td colspan=3></td>
                    <td>
                        ${
                            (function(){
                                let total = 0;
                                model.negociacoes.forEach(n =>total+=n.volume)
                                return total;
                            })()
                        }
                    </td>
                </tfoot>
            </table>
        `
    }

    update(model) {

        this._elementoPai.innerHTML = this._template(model);

    }

}