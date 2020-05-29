import { Component, OnInit } from '@angular/core';
import { post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})

export class PostsPage implements OnInit {

  posts: post[];
  postsPage: post[];
  private index: number;
  private readonly offset: number;
  valorDaBarra = 0;

  constructor(private postService: PostsService) { 
    setInterval(() => { this.valorDaBarra += 0.03;}, 500);
    this.index = 0;
    this.offset = 15;
  }

  async ngOnInit() {
    await this.postService.get().then((objetos: post[]) => this.posts = objetos).catch();
    this.exibirOsPosts();
  }

  exibirOsPosts(){
    this.valorDaBarra = 1;
    this.postsPage = this.posts.slice(this.index, this.offset+this.index);
    this.index += this.offset;
  }
  
  loadData(event) {
    setTimeout(() => {
      let newPosts = this.posts.slice(this.index, this.offset+this.index);
      this.index += this.offset;
      for (let i = 0; i < newPosts.length; i++) {
        this.postsPage.push(newPosts[i]);
      }
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.postsPage.length == this.posts.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
