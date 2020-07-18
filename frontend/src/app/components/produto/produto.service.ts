import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private snackBar: MatSnackBar) { }

  mostrarMessagem(msg: string): void {
    console.log(this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    }))
  }
}
