import { v4 as uuidv4 } from 'uuid'

type TAutor = {
    nome:string
    idade:number
}


export default class Autor {
    readonly id:string
    nome:string
    idade:number

    constructor(autor:TAutor){
        this.id = this.gerarId()
        this.nome = autor.nome
        this.idade = autor.idade
    }

    private gerarId():string{
        return uuidv4()
    } 
}