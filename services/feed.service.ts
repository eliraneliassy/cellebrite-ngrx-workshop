import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = 'https://api.fashbash.co/api/feed';

  constructor(private httpClient: HttpClient) { }

  getFeed(page: number) {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    return this.httpClient.get(`${this.BASE_URL}`, { params });
  }
}
