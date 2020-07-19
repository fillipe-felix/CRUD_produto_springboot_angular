import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../produto.service";
import { Router } from "@angular/router";
import {ProdutoModel} from "../produto.model";
import {CategoriaModel} from "../../categoria/categoria.model";
import {CategoriaService} from "../../categoria/categoria.service";

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {


  produto: ProdutoModel = {
    nome: '',
    preco: null,
    categoria: {}

}

  categorias: CategoriaModel[]

  constructor(private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private router: Router) { }


  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(categorias =>{
      this.categorias = categorias
      console.log(this.categorias)
    })

  }

  criarProduto(): void{
    this.produtoService.insert(this.produto).subscribe(() => {
      this.produtoService.mostrarMessagem('Produto criado com sucesso!', 'green-snackbar-sucess')
      this.router.navigate(["/produtos"]);
    })

  }

  cancelar(): void{
    this.router.navigate(["/produtos"]);
  }

  findAllCategoria() {
    this.categoriaService.findAll().subscribe()
  }
}
