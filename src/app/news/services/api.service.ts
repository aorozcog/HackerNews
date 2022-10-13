import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private newsUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }
  
  //Get the top 500 stories
  public getTopNews(): Observable<number[]> {
    return this.http.get<number[]>(`${this.newsUrl}/topstories.json?print=pretty`)
      .pipe(
        catchError(this.handleError<number[]>('getTopNews', []))
      );
  }

  //Get an story by id
  public getStoryById(newsId: number): Observable<News> {
    return this.http.get<News>(`${this.newsUrl}/item/${newsId}.json?print=pretty`)
      .pipe(
        catchError(this.handleError<News>('getStoryById'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

}
