import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { CharacterInfo, FilmInfo } from '../models';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCharacterDetails(url: string): Observable<CharacterInfo> {
    return this.http.get<CharacterInfo>(url);
  }

  getFilmList(urls: string[]): Observable<FilmInfo[]> {
    const observables = [];
    urls.forEach(link => observables.push(this.getFilmDetail(link)));
    return forkJoin([...observables]);
  }

  getFilmDetail(link: string): Observable<FilmInfo> {
    const url = link.replace(/^http:\/\//i, 'https://');
    return this.http.get<FilmInfo>(url);
  }
}
