import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { enviroment } from '../../Enviroments/enviroment';
import { Supplier } from './supplier.dto';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor() { }
}

export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(enviroment.api + 'suppliers');
    //  return this.http.get(enviroment.api + 'categories');
  }

  public getById(id: Number) {
    return this.http.get<Supplier>(enviroment.api + 'suppliers/' + id)
  }

  public save(supplier: Supplier): Observable<Supplier> {
    console.log(supplier);
    if (supplier.id) return this.http.put<Supplier>(enviroment.api + 'suppliers/' + supplier.id, supplier);
    return this.http.post<Supplier>(enviroment.api + 'suppliers/', supplier);
  }
  public delete(supplier: Supplier) {
    return this.http.delete(enviroment.api + 'suppliers/' + supplier.id);
  }

  //public create(): Observable<Supplier> {
  //  return of<Supplier>({

  //  });
  //}

}
