//Aqui criamos 4 funções sendo elas, alertidadenome, circarea, basecub, trapezio, luckynumb e iniciar.
function alertidadenome() {
    //Após criar a função criamos as variaveis acessando a DOM e selecionando os elementos no qual vamos trabalhar. depois criamos um IF para alertar o usuario de que ele precisa inserir valores nos imputs para que possamos
    // fazer os calculos e executar a nossa função, depois de verificarmos que os valores estão todos preenchidos caimos no else, onde vamos efetuar o calculo.
    // depois do calculo ser executado, acessamos novamente a DOM e atribuimos ao conteudo de texto do P com o id de idade o conteudo de nossa template string.
    let nome = document.getElementById("nome1").value
    let idade = document.getElementById("idade1").value
    if (nome == "" || idade == "") {
        alert(`Por favor preencha todos os campos com caracteres validos para traduzirmos sua idade em hora, semanas e mêses`)
    } else {
        let idade_meses = idade * 12
        let idade_dias = idade * 365
        let idade_horas = (idade * 365) * 24
        document.getElementById("idade").textContent = `Olá, ${nome}, Sua idade é ${idade} correto ? então sua idade em mesês é ${idade_meses}, sua idade em dias é ${idade_dias} e por fim, sua idade em horas é ${idade_horas}.`
    }
}
function circarea() {
    // usamos a mesma base da função a cima, com o detalhe que usamos Math.PI para acessarmos o valor de PI, depois usamos Math.pow para executarmos a potenciação da variavel circ.
    // usamos também o toFixed arredondando as casas decimais do resultado para apenas Duas dentro da nossa template string. Também criamos um if/else para alaertar o usuario de inserir numeros nos espaços em branco.
    let circ = document.getElementById("Raio_circ").value
    if(circ == ""){
        alert(`Preencha todos os campos com numeros para calcular a Circunferência e a Área`)
    }else{
        rcirc = (2 * Math.PI) * circ
        area = Math.PI * Math.pow(circ, 2)
        document.getElementById("rai_circ_result").textContent = `Circunferência = ${rcirc.toFixed(2)}`
        document.getElementById("rai_area_result").textContent = `Área = ${area.toFixed(2)}`
    }
}
function basecub() {
    //basicamente a mesma dinamica do exercicio a cima, definimos a variavel bcub acessando a DOM logo após criamos o if para alertar o usuario sobre preencher os campos em branco com numeros
    //em seguida efetuamos os calculos com a potenciação de Math.pow em alguns casos.
    bcub = document.getElementById("Base_cub").value
    if(bcub == ""){
        alert(`Preencha todos os campos para calcular a Area, Volume do cubo, Área total e Área lateral`)
    }else{
        Area = Math.pow(bcub, 2)
        Volcub = Math.pow(bcub, 3)
        AreaT = Area * 6
        AreaL = Math.pow((bcub * 4), 2)
        document.getElementById("area_result").textContent = `Área = ${Area.toFixed(2)}`
        document.getElementById("volcib_result").textContent = `Volume do Cubo = ${Volcub.toFixed(2)}`
        document.getElementById("areaT_result").textContent = `Área total  = ${AreaT.toFixed(2)}`
        document.getElementById("areaL_result").textContent = `Área lateral = ${AreaL.toFixed(2)}`
    }
}
function trapezio() {
    Bmintrap = document.getElementById("Bmin_trap").value
    Bmaxtrap = document.getElementById("Bmax_trap").value
    Atrap = document.getElementById("Alt_trap").value

    if(Bmintrap == "" ||  Bmaxtrap == "" || Atrap == "" ){
        alert(`Por favor preencha todos os campos para calcularmos a Área do trapezio `)
    }else{
    AreaTrap = ((Bmaxtrap + Bmintrap) * Atrap) / 2
    document.getElementById("atrap_result").textContent = `Área do trapézio = ${AreaTrap.toFixed(2)}`
    }
}
//usamos Math.random para exibir um numero da sorte para nosso usuario que se altera a cada click no botão.
function luckynumb() {
    sorte = Math.floor(Math.random() * 11)
    document.getElementById("sorte_result").textContent = `Seu numero da sorte é ${sorte}`
}
//aqui temos a função inciar no qual inicia todas as funções descritas a cima
function iniciar() {
    alertidadenome();
    circarea();
    basecub();
    luckynumb();
    trapezio();
}
//selecionamos nosso botão para adiciona-lo uma função do que fazer usando addEventListener com os parâmetros da ação do mouse e do que fazer em seguida.
document.getElementById("btn").addEventListener("click", iniciar)
