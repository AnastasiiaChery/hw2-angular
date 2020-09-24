import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPostsModel} from "../models/post.model";
import {Coments} from "../models/post.model";


@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPost(): Observable<IPostsModel[]> {
    return this.http.get<IPostsModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getComents(id: number): Observable<Coments[]> {
    return this.http.get<Coments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }

}