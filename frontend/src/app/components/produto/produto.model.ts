import {CategoriaModel} from "../categoria/categoria.model";

export interface ProdutoModel {
    //? deixa o id como opcional
    id?: number,
    nome: string,
    preco: number,
    categoria: {}
}
