import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  arrPintarPosts: Post[];
  arrPintarPostLocal: Post[];
  // arrPintarPostsCategoria: Post[];

  constructor(public blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    // this.arrPintarPosts = this.blogService.getAllPosts(); //CReados los posts a mano
    // console.log(this.arrPintarPosts);
    const traerDeLocal = localStorage.getItem('posts');
    this.arrPintarPostLocal = JSON.parse(traerDeLocal); // Creados los posts desde local
    // console.log(this.arrPintarPostLocal);
  }

  pintarPostPorCategoria(pCategoria): void {
    this.arrPintarPosts = this.blogService.getPostsByCategoria(pCategoria);
  }

  pintarPostPorCategoriaLocal(pCategoria): void {
    this.arrPintarPostLocal = this.blogService.getPostsByCategoriaLocal(
      pCategoria
    );
  }

  borrarDatos(): void {
    localStorage.removeItem('posts');
    // this.blogService.getAllPostsLocal();
    location.reload();
  }

  refrescarBlog(): void {
    const traerDeLocal = localStorage.getItem('posts');
    this.arrPintarPostLocal = JSON.parse(traerDeLocal);
  }
}
