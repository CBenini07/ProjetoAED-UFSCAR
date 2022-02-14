import {PilhaBurra} from "./PilhaBurra.js"

//Definindo a pilha inteligente
function PilhaInteligente(tamanho){
    const pilha =  PilhaBurra(tamanho);

    //CopiaPilha - Retorna uma copia da pilha burra atual
    function copiaPilha(){
        //Criando pilha auxiliar e pilha para ser retornada
        const pilhatemp = PilhaBurra(tamanho);
        const pilhaCopia = PilhaBurra(tamanho);
        while(!pilha.vazia()){
            pilhatemp.push(pilha.pop());
        }
        //Reinserindo valores
        while(!pilhatemp.vazia()){
            let valor = pilhatemp.pop();
            pilha.push(valor);
            pilhaCopia.push(valor);
        }
        return pilhaCopia
    }

    //Remover um elemento (uma unica vez) da Pilha sem alterar o resto. Retorna bool se encontrou ou nao
    function removeElemento(item){
        const pilhatemp = PilhaBurra(tamanho);
        let achou = false;
        //Empilhar na outra pilha
        while(!pilha.vazia() && !achou){
            let valor = pilha.pop();
            if(valor == item){
                achou = true;
            }
            else{
                pilhatemp.push(valor);
            }
        }
        //Reinserindo os valores
        while(!pilhatemp.vazia()){
            pilha.push(pilhatemp.pop());
        }

        return achou;
    }

    //Inserindo metodos da pilhaburra, assim como metodos da pilhainteligente
    return Object.assign({}, pilha, {copiaPilha, removeElemento});
}

export{PilhaInteligente}

