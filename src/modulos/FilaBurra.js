//FILA TEMPORARIA ENQUANTO MAURICIO NAO DA PUSH

function FilaBurra(tamanho){
    const pilha = Array(tamanho).fill();
    let topo = 0;

    function vazia(){
        return topo == 0;
    }

    function cheia(){
        return topo == tamanho;
    }

    function empilha(x){
        if(!cheia()){
            pilha[topo] = x;
            topo++
            return;
        }
        console.error("Fila cheia");
    }

    function desempilha(){
        if(!vazia()){
            const valor = pilha[0];
            for(let i=0; i < topo; i++) pilha[i] = pilha[i + 1];
            topo--;
            return valor;
        }
        console.error("Fila Vazia");
    }
    return {desempilha, empilha, vazia, cheia}
}

export { FilaBurra }