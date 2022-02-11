//Criando a pilha burra
function PilhaBurra(tamanho){
    //Criando o array e "simulando" alocacao dinamica do C++. Preenche com undefined
    const pilha = Array(tamanho).fill();
    let topo = 0;

    //Verifica cheia
    function cheia(){
        return topo == tamanho;
    }

    //Verifica vazia
    function vazia(){
        return topo == 0;
    }

    //Empilha
    function push(item){
        if(!cheia()){
            pilha[topo++] = item;
        } else {
            console.error('Pilha cheia')
        }
    }

    //Desempilha
    function pop(){
        topo--;
        return pilha[topo];
    }

    return { cheia, vazia, push, pop }
}