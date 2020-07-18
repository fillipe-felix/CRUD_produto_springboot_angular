import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {HomeComponent} from "./views/home/home.component";
import {ProdutoComponent} from "./views/produto/produto.component";
import {CategoriaComponent} from "./views/categoria/categoria.component";
import {ProdutoCreateComponent} from "./components/produto/produto-create/produto-create.component";
import {CategoriaCreateComponent} from "./components/categoria/categoria-create/categoria-create.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },

    {
        path: "produtos",
        component: ProdutoComponent
    },

    {
        path: "categorias",
        component: CategoriaComponent
    },

    {
        path: "produtos/create",
        component: ProdutoCreateComponent
    },

    {
        path: "categorias/create",
        component: CategoriaCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
