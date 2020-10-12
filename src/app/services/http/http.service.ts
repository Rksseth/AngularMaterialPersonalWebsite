import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  addObservableErrorHandling(ob: Observable<any>, defaultValue: any = []): Observable<any> {
    return ob.pipe(
      catchError(err =>  {
        console.log(err);
        return of(defaultValue);
      })
    );
  }
  getWikiAPI(search: string): Observable<any> {
    let baseURL = `https://en.wikipedia.org/w/api.php?`;
    let params = {
      origin: "*",
      action: "query",
      format: "json",
      titles: search,
      prop: "links",
      pllimit: "max"
    };
    let url = this.formulateURL(baseURL, params);
    let ob: Observable<any> = this.http.get(url);
    ob = this.addObservableErrorHandling(ob, null).pipe(map( result => {
      if (result) {
        return this.getTitles(result);
      }
      return [];
    }));
    return ob;
  }
  formulateURL(baseURL, params) {
    let newURL = baseURL;
    Object.keys(params).forEach(function(key){newURL += "&" + key + "=" + params[key];});
    return newURL;
  }
  getTitles(response): Array<string> {
    if (!response.query ||  !response.query.pages) {
        return [];
    }
    const titles = [];
    const pages = response.query.pages;
    for (const p in pages) {
        let links = pages[p].links;
        if (links) {
            links.forEach( l => {
                const title = l.title;
                if (!title.includes(":")) {
                    titles.push(title);
                }
            });
        }
    }
    return titles;
  }
}
