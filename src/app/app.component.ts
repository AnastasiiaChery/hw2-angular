  
import { Component } from '@angular/core';
import {PostsService} from './components/post.service';
import {Coments, IPostsModel} from "./models/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  posts: IPostsModel[] = [];
  coment:Coments[] = [];
  
  constructor(private userService: PostsService) {
    this.userService.getPost().subscribe(jsonPost => {
      console.log(jsonPost);
      this.posts = jsonPost

     
    })
    
  }
  comentToPost(id: number): void {
    this.userService.getComents(id).subscribe(jsonCom => {
            console.log(jsonCom);
        if(id=id)
        this.coment = jsonCom}
      );
  }
  ngOnInit(): void {
  }
    
  
}
