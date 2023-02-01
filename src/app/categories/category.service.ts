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
}
