class Stack{
    constructor(){
        this.enterNode= null;
    }
    push(data){
        let stackDisplay = document.getElementById("stackDisplay"); 
        let exampleP = document.createElement("p"); //Criar um elemento paragrafo

        //Adiciona novo nó
        let newNode = {data: data, next: null};
        let auxNode = {data: data, next: null};
        auxNode = this.enterNode;
        this.enterNode = newNode;
        this.enterNode.next = auxNode;

        exampleP.innerText = this.enterNode;
        stackDisplay.appendChild(exampleP);
        

        return this.enterNode;
    }
    pop(){
        
        //Retira o no de cima
        if(!this.isEmpty()){
            let nodePopped = this.enterNode;
            this.enterNode = this.enterNode.next;
           
            return nodePopped;
        }else{
            return null
        }
    }
    top(){
        //Mostra o no do topo
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



//Instancia objetos
let myStack = new Stack();

let btnDisplayAllStack = document.getElementById("push");
btnDisplayAllStack.addEventListener("click", myStack.push);





