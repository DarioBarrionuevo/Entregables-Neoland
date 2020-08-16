import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  arrPintarPosts: Post[];
  post: Post;
  constructor(public blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.arrPintarPosts = this.blogService.getAllPosts();
    // console.log(this.arrPintarPosts);
  }

  recogerDatosForm(pForm): void {
    // console.log('lo q saca el formulario', pForm);
    this.blogService.agregarPost(pForm);
    // console.log(this.arrPintarPosts);
    this.blogService.savePosts(pForm);
    this.router.navigate(['/blog']);
  }
}
