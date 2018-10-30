import { Autor } from "./autor.model";
import { Categoria } from "./categoria.model";

export class Livro {
    id: number;
    titulo: string;
    data_de_publicacao: string;
    id_autor: Autor;
    id_categoria: Categoria;
}