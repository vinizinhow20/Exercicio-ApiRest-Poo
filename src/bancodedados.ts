import Autor from "./modelos/Autor";
import Post from "./modelos/Post";

export const autores: Autor[] = []
export const posts: Post[] = [
    new Post({
        titulo: 'meu primeiro post',
        descricao: 'Descrição do meu primeiro post',
        autor: new Autor({
            nome: 'Vinicius Gabriel',
            idade: 25
        })
    })
]

