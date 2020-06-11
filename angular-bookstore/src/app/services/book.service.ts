import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Book } from '../common/book';
import { map } from '../../../node_modules/rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl="http://localhost:8080/api/v1/books";
  constructor(private httpClient: HttpClient) { }

  getBooks(theCategoryId : number): Observable<Book[]>{
    const searchUrl= `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.books)
    )
  }
}

interface GetResponseBooks{
  _embedded: {
    books: Book[];
  }
}