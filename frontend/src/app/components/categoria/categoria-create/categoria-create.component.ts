import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriaService} from "../categoria.service";
import {CategoriaModel} from "../categoria.model";

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: CategoriaModel = {
    nome: ''
  }

  constructor(private categoriaService: CategoriaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  criarCategoria(): void{
    //subscribe depois que ele recebe o retorno do back-end ele chama essa arrow function
    this.categoriaService.insert(this.categoria).subscribe(() => {
      this.categoriaService.mostrarMessagem('Categoria criada com sucesso!')
      this.router.navigate(["/categorias"]);
    })
  }

  cancelar(): void{
    this.router.navigate(["/categorias"]);
  }

}
