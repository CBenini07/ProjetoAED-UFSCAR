//Metodos de DOM aqui

const DOM = (() => {
    //Variáveis locais
    const cell = [];
    const mainDiv =  document.getElementById('main');
    //Função para iniciar o jogo
    function init (){
        //Criando a matriz principal. Div dentro de div. Acessar cada elemento por cell[i][j]
        for(let i=0; i<6; i++){
            //Criando o div de linha
            const linha = document.createElement('div');
            linha.classList.add('linha');
            //Colunas da matriz
            const coluna = [];
            for(let j=0; j<6; j++){
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
            tecla.addEventListener('click', () => { console.log(tecla.textContent)} );
        });

        //
    }

    return { init }
})();

export {DOM}