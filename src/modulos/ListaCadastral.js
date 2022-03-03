//Fazendo a listaCadastral

//Celula
function Node(conteudo){
    return{
        conteudo,
        next : null,
    }
}

//List Cadastral c header
function ListaCadastral(){
    //Criando o head e linked list
    const head = Node(undefined);

    //Criando agora operações.

    //Insere elemento
    function insere(x){
        if(!estaNaLista(x)){
            let novo = Node(x);
            novo.next = head.next;
            head.next = novo;
            return true;
        }

        return false;
    }

    //Remove elemento x
    function remove(x){
        let p = head;
        let morta = head.next;
        while(morta != null){
            if(morta.conteudo == x){
                p.next = morta.next;
                morta = null;
                return true;
            }
            //percorrendo
            p = morta;
            morta = morta.next;
        }
        return false;
    }

    //Verifica vazia
    function vazia(){
        return head.next == null;
    }

    //Pega o primeiro
    function pegaOPrimeiro(){
        if(!vazia()) return head.next.conteudo;
        return undefined;
    }

    //Pega o proximo
    function pegaOProximo(x){
        let p = head.next;
        while(p != null){
            if(p.conteudo == x){
                if(p.next == null) return undefined;
                return p.next.conteudo;
            }
            p = p.next;
        }
        return false;
    }

    //Funcao bool que retorna se elemento esta na lista
    function estaNaLista(x){
        let p = head.next;
        while(p != null){
            if(p.conteudo == x) return true;
            p = p.next;
        }
        return false;
    }

    return {insere, remove, vazia, pegaOProximo, pegaOPrimeiro, estaNaLista}

}

export {ListaCadastral}