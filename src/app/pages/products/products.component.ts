import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products;
  public search;
  public displayError;
  public txtError;
  constructor(private productsService: ProductsService) { 
    this.search = "";
    this.products = [];
    this.displayError = false;
    this.txtError = "";
  }

  ngOnInit(): void {
  }

  searchProducts(){
    this.hideError();
    this.products = [];
    this.productsService.getProductsFilters(this.search).subscribe(
      Response => { 
        if(Response.result?.length > 0){          
          this.products = Response.result
        }
        else if(Response.result?.id){
          this.products.push(Response.result);
        }
        else{
          this.showError('No se encontraron productos');
        }
      },
      error => {
        console.log('Error al buscar Productos: ',error);
        this.showError('Error al buscar Productos');
      }
    );
  }

  showError(text){
    this.displayError = true;
    this.txtError = text;
  }

  hideError(){
    this.displayError = false;
    this.txtError = "";
  }

}
