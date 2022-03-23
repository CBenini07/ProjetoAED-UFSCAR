//Importando palavras
import palavras from "../etc/arrayUsado.json";
import dicionario from "../etc/arrayBase.json";
import { PilhaInteligente } from "./PilhaInteligente";
import { FilaBurra } from "./FilaBurra";
import { ListaCadastral } from "./ListaCadastral";
import { FilaInteligente } from "./FilaInteligente";
import { DOM } from "./DOM";

//Criando a instancia da aplicacao principal

const App = (()=>{
    //Escolhendo uma palavra aleatoria. Enfilar ela na funcao de comparacao
    const palavra = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();    

    //Compara e roda uma funcao callback DOM especifica -> callbackCelula([posicoes corretas], [posicoes semicorretas], [posicoes incorretas], bool vitoria)
    function compara(tentativa, callbackTeclado, callbackCelula){
        //Criando filas e enfilando
        const palavraFila = FilaInteligente(5);
        const tentativaFila = FilaInteligente(5);
        for(let i=0; i<5; i++){
            palavraFila.push(palavra[i]);
            tentativaFila.push(tentativa[i]);
        }

        //Verificando filas iguais - apenas anunciar a vitoria e retornar
        if(palavraFila.filasIguais(tentativaFila)){
            callbackCelula(null, null, null, true);
            const temp = PilhaInteligente(6);
            while(!palavraFila.vazia()) temp.push(palavraFila.pop());
            percorrerTeclado(temp, PilhaInteligente(6), PilhaInteligente(6), callbackTeclado);
            return;
        }
        
        //array de controle do index -- retornar indexes corretos
        let index = [0,1,2,3,4];

        //Pilhas de index
        const correta = PilhaInteligente(5);
        const semicorreta = PilhaInteligente(5);
        const incorreta = PilhaInteligente(5);
        //Pilhas de letra
        const corretaLetra = PilhaInteligente(5);
        const semicorretaLetra = PilhaInteligente(5);
        const incorretaLetra = PilhaInteligente(5);

        //verificando posicao corretas
        for(let i=0; i<5; i++){
            let valorcorreto = palavraFila.pop();
            let valor = tentativaFila.pop()
            if(valor == valorcorreto){
                //Valor correto e remocao permanente
                index[i] = null;
                correta.push(i);
                corretaLetra.push(valor);
            } else{
                //Valor incorreto - reinserir no valor original e no final da fila
                palavraFila.push(valorcorreto);
                tentativaFila.push(valor);
            }
        }

        //Remover elementos com null - resetar o array
        index = index.filter(item => item != null);

        //Agora verificando semicorretas
        for(let i=0; i < index.length; i++){
            //As duas filas serao do mesmo tamanho. Nehuma na posição correta
            let valor = tentativaFila.pop();
            if(palavraFila.verificaRemoveElemento(valor)){
                //Elemento ja removido. Nao reinserir
                semicorretaLetra.push(valor);
                semicorreta.push(index[i]);
                index[i] = null;
            }
            //nao eh preciso reinserir, apenas pegar elementos sobrando do index para o incorreto
            incorretaLetra.push(valor);
        }
        index = index.filter(item => item != null);

        index.forEach(item => incorreta.push(item));

        //Trazendo os dados para a interface
        percorrerTeclado(corretaLetra, semicorretaLetra, incorretaLetra, callbackTeclado);
        callbackCelula(correta, semicorreta, incorreta, false);
    }


    //TRABALHANDO NO TECLADO (Cores)
    //Armazenamento das teclas ja tentadas  
    const lCorreta = ListaCadastral();
    const lSemiCorreta = ListaCadastral();
    const lIncorreta = ListaCadastral();

    function percorrerTeclado(pCorreta, pSemiCorreta, pIncorreta, callback){
        //Percorrendo o teclado, executando o callback de manipulacao da DOM especificado (mudanca de cor)

        //Desempilhando as pilhas e executando o callback caso necessario
        let x;
        //Verificando as corretas
        while(!pCorreta.vazia()){
            x = pCorreta.pop();
            //Se nao estiver na lista, executar callback e adiconar
            if(!lCorreta.estaNaLista(x)){
                callback(x, 0);
                lCorreta.insere(x);
            }

            //Tenta retirar elemento da semicorreta, caso o usuario inseriu ela mal posicionada anteriormente
            lSemiCorreta.remove(x);
        }
        //Agora, as semicorretas
        while(!pSemiCorreta.vazia()){
            x = pSemiCorreta.pop();
            //Se nao ja esta marcada como correta ou como semicorreta, executar
            if(!lCorreta.estaNaLista(x) && !lSemiCorreta.estaNaLista(x)){
                callback(x,1);
                lSemiCorreta.insere(x);
            }
        }

        //Agora, as incorretas
        while(!pIncorreta.vazia()){
            x = pIncorreta.pop();
            //Nao deve estar na correta, incorreta e nem na incorreta para mudar de cor
            if(!lCorreta.estaNaLista(x) && !lSemiCorreta.estaNaLista(x) && !lIncorreta.estaNaLista(x)){
                callback(x,2);
                lIncorreta.insere(x)
            }
        }
    }   

    return {percorrerTeclado, compara};
})();

export { App }