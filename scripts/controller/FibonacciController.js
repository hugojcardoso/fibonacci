class FibonacciController{

    constructor(){
        this._sequencia = [];
        this.initialize();

    }

    initialize(){
        this.calculaSequencia(10);
    }

    calculaSequencia(num){
        var a = 1, b = 0, temp;

        while (num >= 0){
          temp = a;
          a = a + b;
          b = temp;
          num--;
          console.log(num);
        }
      
        return b;
    }



}