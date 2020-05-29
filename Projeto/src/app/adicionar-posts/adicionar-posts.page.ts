import { Component, OnInit } from '@angular/core';
import { post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-adicionar-posts',
  templateUrl: './adicionar-posts.page.html',
  styleUrls: ['./adicionar-posts.page.scss'],
})
export class AdicionarPostsPage implements OnInit {

  post = {} as post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  postar(){
    console.log(this.post);
    this.postService.post(this.post);
  }

}
