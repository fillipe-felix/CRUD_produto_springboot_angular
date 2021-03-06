import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule} from "@angular/material/toolbar";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './views/home/home.component';

import { MatCardModule } from "@angular/material/card";
import { ProdutoComponent } from './views/produto/produto.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';

import { MatButtonModule } from "@angular/material/button";
import { CategoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

import { HttpClientModule } from "@angular/common/http";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { ProdutoRead2Component } from './components/produto/produto-read2/produto-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CategoriaReadComponent } from './components/categoria/categoria-read/categoria-read.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { CategoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutoComponent,
    CategoriaComponent,
    ProdutoCreateComponent,
    CategoriaCreateComponent,
    ProdutoReadComponent,
    ProdutoRead2Component,
    CategoriaReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    CategoriaUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
