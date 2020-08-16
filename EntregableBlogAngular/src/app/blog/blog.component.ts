import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  arrPintarPosts: Post[];
  // arrPintarPostsCategoria: Post[];

  constructor(public blogService: BlogService) {}

  ngOnInit(): void {
    this.arrPintarPosts = this.blogService.getAllPosts();
    console.log(this.arrPintarPosts);
    // for (const post of this.arrPintarPosts) {
    //   console.log(post.imagen);
    // }
  }

  pintarPostPorCategoria(pCategoria): void {
    this.arrPintarPosts = this.blogService.getPostsByCategoria(pCategoria);
  }
}
