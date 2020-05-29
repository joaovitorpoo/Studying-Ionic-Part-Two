import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  jsonplaceholder = "https://jsonplaceholder.typicode.com/posts/";

  constructor(private http: HttpClient) { }

  async get() {
    let resposta = await this.http.get(this.jsonplaceholder).toPromise();
    return resposta;
  }

  async post(objeto: post){
    let resposta = await this.http.post(this.jsonplaceholder, objeto).toPromise();
    return resposta;
  }
}
