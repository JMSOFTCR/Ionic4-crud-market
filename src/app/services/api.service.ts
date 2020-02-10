import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Products } from '../models/products';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_path = 'https://market-api-rest.herokuapp.com/products'
  //base_path = 'http://localhost:3000/products'

  constructor(private http: HttpClient ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  //Handle API Error 
  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      //A client-side or network error ocurred
      console.error('An error occurred:', error.error.message);
    }else {
      //The backend returned an unsuccessful response code
      //The response body may contain clues as to what went wrong
      console.error(
        `Backend returned code ${error.status}` +
        `Body was: ${error.error}`);
    }
    // Return an observable with user-facing error message
    return throwError(
      'Something bad happened; please try again later');
  };

  // Create a new item
  createItem(item): Observable<Products> {
    return this.http
      .post<Products>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //get single products data by ID
   getItem(id): Observable<Products> {
    return this.http
    .get<Products>(this.base_path + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //get products data
  public getList(): Observable<Products[]> {
    return this.http
    .get<Products[]>(this.base_path)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  } 

  //update Item by id
  updateItem(id, item): Observable<Products> {
    return this.http 
    .put<Products>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Delete item by id
  deleteItem(id) {
    return this.http
    .delete<Products>(this.base_path + '/' + id, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

}
