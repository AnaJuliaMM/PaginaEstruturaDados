class Stack{
    constructor(){
        this.enterNode= null;
        this.stackDisplay = document.getElementById("stackDisplay"); 

    }
    pushPayloadInput(){
        //Revelar formulario
        let inputDiv = document.getElementsByClassName("inputAdd")[0];
        inputDiv.style.display = "flex";
    }
    push(){
        //Entrada do usuário
        let input = document.getElementById("payload").value;

        //Criar um elemento para mostrar o nó
        let nodeFront = document.createElement("p"); 
        nodeFront.setAttribute("class", "nodeContent");

        //Adiciona novo nó
        let newNode = {data: input, next: null};
        let auxNode = {data: null, next: null};
        auxNode = this.enterNode;
        this.enterNode = newNode;
        this.enterNode.next = auxNode;

        //Mostrar na tela
        nodeFront.innerText = this.enterNode.data;
        stackDisplay.appendChild(nodeFront);
        
        return this.enterNode;
    }
    closeAddInput(){
        let inputDiv = document.getElementsByClassName("inputAdd")[0];
        inputDiv.style.display = "none";
    }
    pop(){
        //Método Pop()=Retira o no de cima
        if(!this.isEmpty()){
            let nodePopped = this.enterNode;
            this.enterNode = this.enterNode.next;
           
            return nodePopped;
        }else{
            return null
        }
    }
    top(){
        //Método Top = mostra o nó do topo

        //Fechar input do bt adicionar
        this.closeAddInput();
        //Criar elemento parágrafo para o nó
        let nodeFront = document.createElement("p"); 
        nodeFront.setAttribute("class", "nodeContent");
        //Adicionar valor
        nodeFront.innerText = this.enterNode.data;
        stackDisplay.appendChild(nodeFront);

        return this.enterNode;
    }
    isEmpty(){
        //Verifica se a pilha está vazia
        return this.enterNode==null?true:false;
    }
    displayAll(){
        //Exibe a pilha
        let returnString = "Stack:";
        let auxNode = this.enterNode;

        if(!this.isEmpty()){
            while(auxNode!=null){
                returnString += `value= ${auxNode.data}, `;
                auxNode = auxNode.next;
            }
        }else{
            returnString = "null";
        }
        return returnString;
    }
    
}

//Instancia objeto
let myStack = new Stack();

let btnAdicionar = document.getElementById("push");
btnAdicionar.addEventListener("click", myStack.pushPayloadInput);

let payloadBtn = document.getElementById("payloadBtn");
payloadBtn.addEventListener("click", myStack.push);

let btnTop = document.getElementById("top");
btnTop.addEventListener("click", myStack.top);





