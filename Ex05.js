function calcular() {
    var progressao = []

    var primeiro = parseFloat(document.getElementById("termo1").value)
    var razao = parseFloat(document.getElementById("razao").value)
    var termos = parseInt(document.getElementById("termos").value)

    progressao[0] = primeiro

    for (var i = 1, calculo = 0; i < termos; i++) {
        calculo = progressao[i - 1] * razao
        progressao.push(parseFloat(calculo))
    }

    document.getElementById("resultado").innerHTML = `Resultado ${progressao}`
}