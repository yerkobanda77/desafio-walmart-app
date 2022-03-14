import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { CardsProductsComponent } from './pages/components/cards-products/cards-products.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CurrencyCLPPipe } from 'src/app/pipes/currency-clp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CardsProductsComponent,
    CurrencyCLPPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
