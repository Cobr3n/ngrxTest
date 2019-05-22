import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubreposService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get('https://api.github.com/search/repositories?q=adcombo')
  }
}
