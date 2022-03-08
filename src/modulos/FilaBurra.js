//Criando Fila burra
function FilaBurra(tamanho){

    // Fila em forma de vetor - simulando alocacao dinamica. Preenchimento com undefined
    const fila = Array(tamanho).fill();
    let fim = 0; // fim (representa total de elementos e onde adicionar novo elemento)

    // Verifica se esta vazia
    function vazia(){
        return fim == 0;
    }

    // Verifica se esta cheia
    function cheia(){
        return fim == tamanho;
    }

    // Adiciona na fila
    function push(elemento){
        if (!cheia()){           
            fila[fim] = elemento;
            fim += 1;   
        } 

        else {
            console.error("Fila cheia!");
        }    
    }

    // Retira da fila
    function pop(){
        if (!vazia()){
            let elemento = fila[0];
            fim -= 1;
            
            // deslocando elementos da direita pra esquerda
            for(let i = 0; i < tamanho; i++)
                fila[i] = fila[i + 1];

            return elemento;
        }

        else{
            console.error("Fila vazia!");
        }
    }

    // criada para testagem - remover dps
    function imprime(){
        for(let i = 0; i < tamanho; i++){
            console.log(fila[i]);
        }
    }

    return { vazia, cheia, push, pop, imprime };
}

export{FilaBurra}