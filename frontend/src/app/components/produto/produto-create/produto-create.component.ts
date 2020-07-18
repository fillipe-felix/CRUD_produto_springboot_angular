import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../produto.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  criarProduto(): void{
    this.produtoService.mostrarMessagem('Produto criado com sucesso!')
  }

  cancelar(): void{
    this.router.navigate(["/produtos"]);
  }
}
