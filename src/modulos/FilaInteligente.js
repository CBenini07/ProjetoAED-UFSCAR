import {FilaBurra} from "./FilaBurra.js"

function FilaInteligente(tamanho){
    const fila = FilaBurra(tamanho);

    // verifica se elemento esta presente na fila
    function verificaElemento(elemento){
        let valor, achou = false;

        // retirando, comparando e repondo ao fim - rotacao completa, lista volta ao original
        for(let i = 0; i < tamanho; i++){
            
            valor = fila.pop();

            if (valor == elemento)
                achou = true;

            fila.push(valor); // reinserindo ao fim
        }

        return achou;
    }

    //Verifica o elemento e remove uma instancia dele
    function verificaRemoveElemento(elemento){
        let valor, achou = false;

        // retirando, comparando e repondo ao fim - rotacao completa, lista volta ao original
        for(let i = 0; i < tamanho; i++){
            
            valor = fila.pop();

            if (valor == elemento && !achou){
                achou = true;
            } else{
                fila.push(valor); // reinserindo ao fim
            }
        }

        return achou;
    }

    // verifica se um dado elemento esta na posicao dada
    function verificaPosicao(elemento, posicao){
        let igual = false;
        let valor;

        // retira, compara e adiciona ao fim
        // ao fim do loop, rotacao completa eh feita e fila retorna posicoes
        // originais
        for(let i = 0; i < tamanho; i++){
            valor = fila.pop();
            if( i == posicao ){
                igual = (valor == elemento);
                console.log(`Valor do valor: ${valor}`);
                console.log(`Valor do elemento: ${elemento}`);
            }
            fila.push(valor);
        }

        return igual;
    }   

    // teste se fila atual e fila passada sao iguais
    function filasIguais(fila2){
        let valor1, valor2, iguais = true;
        
        // retirando de ambas filas, comparando e adicionando ao fim
        for(let i = 0; i < tamanho; i++){
            valor1 = fila.pop();
            valor2 = fila2.pop();

            if(valor1 != valor2)
                iguais = false;
            
            fila.push(valor1);
            fila2.push(valor2);
        }       
        
        return iguais;
    }

    //Inserindo metodos da filaburra, assim como metodos da filainteligente
    return Object.assign({}, fila, {filasIguais, verificaRemoveElemento, verificaElemento, verificaPosicao});
}

export{FilaInteligente}

/*
codigo pra testagem no arquivo de implementacao: 
fila - fila do usuario
fila2- fila da palavra padrao

let cor, elemento, i = 0;
while(!fila.vazia())
{
    elemento = fila.pop();

    if(fila2.verificaElemento(elemento)){
        cor = 1; // 1 = amarelo

        if(fila2.verificaPosicao(elemento, i)){;
            cor = 2; // 2 - verde
            console.log(elemento + " esta na posicao certa");
        }
        else    
            console.log(elemento + " esta na palavra mas em posicao errada");
    }

    else{
        console.log(elemento + " nao esta na palavra");
    }
    i++;
}


*/