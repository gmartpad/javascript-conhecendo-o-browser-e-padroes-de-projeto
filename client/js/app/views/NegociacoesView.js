class NegociacoesView {

    constructor(elementoPai) {

        this._elementoPai = elementoPai;
    
    }

    _template() {

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
                </tbody>
            
                <tfoot>
                </tfoot>
            </table>
        `
    }

    update() {

        this._elementoPai.innerHTML = this._template();

    }

}