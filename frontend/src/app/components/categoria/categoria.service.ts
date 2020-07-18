import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {CategoriaModel} from "./categoria.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    baseUrl = "http://localhost:8080/categorias"

    constructor(private snackBar: MatSnackBar,
                private http: HttpClient) {
    }

    mostrarMessagem(msg: string): void {
        console.log(this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        }))
    }

    insert(categoria: CategoriaModel): Observable<CategoriaModel> {
        return this.http.post<CategoriaModel>(this.baseUrl, categoria)
    }

    findAll(): Observable<CategoriaModel[]> {
        return this.http.get<CategoriaModel[]>(this.baseUrl)
    }
}
