

class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso Normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
}


(function main() {
    const yan = new Pessoa('Yan', 1.81, 93);
    console.log(yan.calcularImc());
    console.log(yan.classificarImc());

    const eliza = new Pessoa('Eliza', 1.69, 53);
    console.log(eliza.calcularImc());
    console.log(eliza.classificarImc());
})();