class FibonacciController{

    constructor(){
        
        this.initialize();

    }

    initialize(){
        this._sequencia = [0,1];
        this.calculaSequencia(10);
        this.imprimeSequencia();
        // this.desenhaLinha(0,200);
        this.desenhaFibonacci();
        // this.desenhaRetangulo(0,0,100,100);
        
    }

    calculaSequencia(n){        
            
            for (let i = 2; i < n + 1; i++){
              this._sequencia.push(this._sequencia[i - 2] + this._sequencia[i -1])
              
            }            
           return this._sequencia[n];
                 
    }
    
    
    //Metodo podera ser apagado
    imprimeSequencia(){
        for (let i = 0; i < this._sequencia.length; i++) {
            console.log(this._sequencia[i]);            
        }
    }

    desenhaLinha(coordX, coordY){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(coordX, coordY);
        ctx.stroke();
    }

    desenhaFibonacci(){
        for (let i = 0; i < this._sequencia.length; i++) {
            if(this._sequencia != 0){
                this.desenhaRetangulo(i,i,this._sequencia[i],this._sequencia[i]);
            }
                        
        }
    }

    desenhaRetangulo(coordX, coordY, sizeX, sizeY){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.rect(coordX, coordY, sizeX, sizeY);
        ctx.stroke();
    }
}