import { PilhaInteligente } from "./PilhaInteligente";
import { FilaBurra } from "./FilaBurra";

//Criando a instancia da aplicacao principal

const app = (()=>{

    //TRABALHANDO NO TECLADO (Cores)
    //Criando pilhas inteligentes com espaco apropriados. Armazenamento das letras corretas.
    const pCorreta = PilhaInteligente(6);
    const pSemiCorreta = PilhaInteligente(6);
    const pIncorreta =  PilhaInteligente(6);

    //Criando a fila de prioridade das pilhas
    const fPrioridade = FilaBurra(3);
    preenchePrioridade();

    //Funcao para percorrer as pilhas do teclado com um callback especifico
    function percorrer(callback){
        //Controle do index da fila
        let posicao = -1;
        while(!fPrioridade.vazia()){
            posicao++;
            //Desempilhando a pilha
            let pAtual = fPrioridade.desempilha();
            //Executando o callback na pilha
            while(!pAtual.vazia()) callback(pAtual.desempilha(), posicao); 
        }
  
        //Reinserindo valores na fila
        preenchePrioridade();
    }

    //Enfila as filas na ordem correta. Lembrete que por ser um objeto, sao empilhados as referencias da pilha
    function preenchePrioridade(){
        fPrioridade.empilha(pCorreta);
        fPrioridade.empilha(pSemiCorreta);
        fPrioridade.empilha(pIncorreta);
    }






    return {};
})();

export { app }