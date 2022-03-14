import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { timeout } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public url;
  constructor(private _http: HttpClient) {
    this.url = environment.url_api; 
  }

  getProductsFilters(search:string) : Observable<any> {
   return this._http.get<any>(this.url+'productsFilters/' + search)
          .pipe(timeout(10000));
  }
}
