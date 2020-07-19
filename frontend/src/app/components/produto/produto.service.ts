import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import {ProdutoModel} from "./produto.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoriaModel} from "../categoria/categoria.model";


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:8080/produtos"

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  mostrarMessagem(msg: string): void {
    console.log(this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    }))
  }

  insert(produto: ProdutoModel): Observable<ProdutoModel> {
    return this.http.post<ProdutoModel>(this.baseUrl, produto)
  }

  findAll(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.baseUrl)
  }

  findById(id: number): Observable<ProdutoModel>{
    const url =`${this.baseUrl}/${id}`
    return this.http.get<ProdutoModel>(url)
  }

  update(produto: ProdutoModel): Observable<ProdutoModel>{
    const url =`${this.baseUrl}/${produto.id}`
    return this.http.put<ProdutoModel>(url, produto)
  }
}
