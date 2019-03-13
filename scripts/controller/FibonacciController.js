class FibonacciController{

    constructor(){
        this._sequencia = [];

    }

    initialize(){
        this.calculaSequencia(3);
    }

    calculaSequencia(n){
        var a = 0, b = 1;
        for (var i = 2; i <= n; i++) {
            var f = a;
            a = b;
            b += f;
            console.log(b);
        }
        return b;
        
    }



}