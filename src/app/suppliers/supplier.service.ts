import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { enviroment } from '../../Enviroments/enviroment';
import { Category } from '../categories/category.dto';
import { Supplier } from './supplier.dto'; @Injectable({
  providedIn: 'root'
})
export class SupplierService {
    constructor(private http: HttpClient) { }
  public getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(enviroment.api + 'suppliers');
  } public getById(id: Number) {
    return this.http.get<Supplier>(enviroment.api + 'suppliers/' + id)
  } public save(supplier: Supplier): Observable<Supplier> {
    debugger
    if (supplier.id) return this.http.put<Supplier>(enviroment.api + 'suppliers/' + supplier.id, supplier);
    return this.http.post<Supplier>(enviroment.api + 'suppliers/', supplier);
  } public delete(id: Number) {
    return this.http.delete(enviroment.api + 'suppliers/' + id);
  } public create(): Observable<Supplier> {
    return of<Supplier>({
      id: 0,
      companyName: "",
      contactName: "",
      contactTitle: "",
      address: {
        street: "",
        city: "",
        region: "",
        postalCode: 0,
        country: "",
        phone: "",
      }
    }
    )
  }
}
