


class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularViagem(percurso, precoCombustivel){
        return (percurso * this.gastoMedio) * precoCombustivel;
    }
}

(function main(){
    const gol = new Carro('volkswagen', 'preto', 1/10);
    console.log(gol.calcularViagem(100, 5.99).toFixed(2));

    const fox = new Carro('volkswagen', 'Branco', 1/15);
    console.log(fox.calcularViagem(100, 5.99).toFixed(2));
})();
 


