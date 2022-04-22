import { App } from "./App";
//Metodos de DOM aqui
const DOM = (() => {
    //Variáveis locais
    const cell = [];
    //Linhas e colunas para preenchimento
    let linhaAtual;
    let colunaAtual;
    const mainDiv =  document.getElementById('main');
    
    //Função para iniciar o jogo
    function init (){
        linhaAtual = 0;
        colunaAtual = 0;
        //Criando a matriz principal. Div dentro de div. Acessar cada elemento por cell[i][j]
        for(let i=0; i<6; i++){
            //Criando o div de linha
            const linha = document.createElement('div');
            linha.classList.add('linha');
            //Colunas da matriz
            const coluna = [];
            for(let j=0; j<5; j++){
                //Div de coluna
                const temp = document.createElement('div');
                temp.classList.add('celula');
                //Adicionando ao array
                coluna.push(temp);
                //Adicionando ao DOM
                linha.appendChild(temp);
            }
            //Inserindo as colunas no array principal
            cell.push(coluna);
            //Inserindo linha no DOM
            mainDiv.appendChild(linha);
        }

        //Agora adicionando os atributos/eventListeners para o teclado
        const teclas = document.querySelectorAll('.button');
        teclas.forEach(tecla =>{
            tecla.setAttribute('data-letra', tecla.innerText);
            tecla.addEventListener('click', () => inserir(tecla.innerText));
        });

        //Adicionando funcionalidade backspace
        document.getElementById('backspace').addEventListener('click', backspace);

        //Adicionando funcionalidade do enter
        document.getElementById('enter').addEventListener('click', enter)

        //Funcionalidade do teclado
        document.addEventListener('keydown', keyHandler);

        console.log("Done loading!");
    }

    function inserir(letra){
        if(colunaAtual < 5){
            cell[linhaAtual][colunaAtual].innerText = letra;
            colunaAtual++;
        }
    }

    function backspace(){
        //Se houver algo, remover e diminuir coluna atual
        if(colunaAtual > 0){
            cell[linhaAtual][colunaAtual - 1].innerText = '';
            colunaAtual--;
        }
    }

    function enter(){
        if(colunaAtual == 5){
            //Gerando a string
            let tentativa = "";
            cell[linhaAtual].forEach(item => tentativa += item.innerText);
            App.compara(tentativa, colorirTeclado, colorirLetras);

            linhaAtual++;
            colunaAtual = 0;
        }
        else{
            console.error("Inserir todas as caixas")
        }
    }

    function keyHandler(e){
        const pressed = e.key;
        //Primeiro verificando backspace/enter
        if(e.key == 'Backspace') backspace();
        else if(e.key == "Enter") enter();
        //Verficando se eh letra
        else if(e.key.toUpperCase() != e.key.toLowerCase() && e.key.length == 1) inserir(e.key.toUpperCase());
    }

    //Colorir caixa de letra
    function colorirLetras(correta, semicorreta, incorreta, ganhou){
        if(ganhou){
            vitoria();
            cell[linhaAtual].forEach(item => item.style.backgroundColor = "green");
            //Preencher os demais e desabilitar input
            for(let i = linhaAtual+1; i < 6; i++){
                cell[i].forEach(item => item.style.backgroundColor = "black");
            }
            linhaAtual = 6;
            return;
        }
        while(!correta.vazia()){
            cell[linhaAtual][correta.pop()].style.backgroundColor = "green";
        };
        while(!semicorreta.vazia()){
            cell[linhaAtual][semicorreta.pop()].style.backgroundColor = "yellow";
        };
        while(!incorreta.vazia()){
            cell[linhaAtual][incorreta.pop()].style.backgroundColor = "red";
        };
    }

    function vitoria(){
        console.log("Voce ganhou!");
        window.location.href = "winPage.html";
    }

    //Funcao para colorir teclado. Usar como callback
    function colorirTeclado(letra,posicao){
        //Pega o elemento
        const element = document.querySelector(`[data-letra="${letra}"]`);
        //Se posicao for 0 (correto), apenas setar
        if(posicao == 0){
            element.style.backgroundColor = "green";
        }
        else if(posicao == 1){
            element.style.backgroundColor = "yellow";
        }
        else{
            element.style.backgroundColor = "red"
        }
    }

    return { init, colorirTeclado }
})();

export {DOM}