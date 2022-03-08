//Importando palavras
import palavras from "../etc/arrayUsado.json"
import { PilhaInteligente } from "./PilhaInteligente";
import { FilaBurra } from "./FilaBurra";
import { ListaCadastral } from "./ListaCadastral";

//Criando a instancia da aplicacao principal

const app = (()=>{
    //TRABALHANDO NO TECLADO (Cores)
    //Armazenamento das teclas ja tentadas  
    const lCorreta = ListaCadastral();
    const lSemiCorreta = ListaCadastral();
    const lIncorreta = ListaCadastral();
    //Criando pilhas inteligentes com espaco apropriados. Armazenamento das letras corretas.
    const pCorreta = PilhaInteligente(6);
    const pSemiCorreta = PilhaInteligente(6);
    const pIncorreta =  PilhaInteligente(6);

    function percorrerTeclado(callback){
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



    return {percorrerTeclado};
})();

export { app }