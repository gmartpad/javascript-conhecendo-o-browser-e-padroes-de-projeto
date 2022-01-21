class DateHelper {

    dataParaTexto(data) {
        return data.getDate() 
        + "/" + (data.getMonth() + 1) 
        + "/" + data.getFullYear()
    }

    textoParaData(texto) {
        return new Date(...texto
            .split("-")
            .map((value, index)=>value - index % 2)
        )
    }

}