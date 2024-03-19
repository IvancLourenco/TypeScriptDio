let a: String = "A";
let b: Number = 2;
let x: Boolean = true;
let m: any = "qualquer tipo";


interface Pessoa {
    nome: string,
    idade: number
    profissao?: string  //opcional não e obrigatorio
}

const pessoa: Pessoa ={
    nome: "Ivan",
    idade:25
}

const outraPessoa: Pessoa ={
    nome: "Kamila",
    idade: 34,
    profissao: "Nutricionista"
}

const arrayPessoa: Pessoa[] = [
    pessoa,
    outraPessoa
]


const arrayPessoaOutraForma: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNumerico: number[] = [
    1,2,3,4
]

const arrayString: Array<string> = [
    "Um", "Array", "de", "Strings"
]