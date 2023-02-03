import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../Enviroments/enviroment';
import { Category } from './category.dto';

@Injectable({
  providedIn: 'root'
})



export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(enviroment.api + 'categories');
  //  return this.http.get(enviroment.api + 'categories');
  }
  public save(category: Category): Observable<Category> {
    console.log(category);
    if (category.id) return this.http.put<Category>(enviroment.api + 'categories/' + category.id, category);
    return this.http.post<Category>(enviroment.api + 'categories/', category);
  }
  public delete(category: Category) {
    return this.http.delete(enviroment.api + 'categories/' + category.id);
  }

}
