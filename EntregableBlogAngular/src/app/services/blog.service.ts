import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  arrPosts: Post[];
  arrPostsLocal: Post[];
  constructor() {
    this.arrPosts = [
      new Post(
        'Primer post',
        'Lorem fistrum ahorarr tiene musho peligro al ataquerl llevame al sircoo ahorarr benemeritaar por la gloria de mi madre está la cosa muy malar va usté muy cargadoo diodenoo. Diodenoo sexuarl a wan al ataquerl diodeno jarl te voy a borrar el cerito qué dise usteer. Ese pedazo de de la pradera pupita diodenoo al ataquerl me cago en tus muelas mamaar de la pradera me cago en tus muelas condemor. Jarl apetecan está la cosa muy malar caballo blanco caballo negroorl mamaar te va a hasé pupitaa está la cosa muy malar a gramenawer hasta luego Lucas se calle ustée pupita. Hasta luego Lucas te voy a borrar el cerito sexuarl al ataquerl quietooor se calle ustée. Te va a hasé pupitaa al ataquerl quietooor diodenoo ese pedazo de la caidita ese pedazo de. Papaar papaar pupita caballo blanco caballo negroorl papaar papaar torpedo caballo blanco caballo negroorl. Al ataquerl ese pedazo de ese hombree a wan te va a hasé pupitaa llevame al sircoo.',
        'Mariano mariano',
        'https://www.blogdelfotografo.com/wp-content/uploads/2020/04/fotografo-paisajes.jpg',
        'December 17, 1995 03:24:00',
        'Vacaciones'
      ),
      new Post(
        'Segundo post',
        'Lorem fistrum ahorarr tiene musho peligro al ataquerl llevame al sircoo ahorarr benemeritaar por la gloria de mi madre está la cosa muy malar va usté muy cargadoo diodenoo. Diodenoo sexuarl a wan al ataquerl diodeno jarl te voy a borrar el cerito qué dise usteer. Ese pedazo de de la pradera pupita diodenoo al ataquerl me cago en tus muelas mamaar de la pradera me cago en tus muelas condemor. Jarl apetecan está la cosa muy malar caballo blanco caballo negroorl mamaar te va a hasé pupitaa está la cosa muy malar a gramenawer hasta luego Lucas se calle ustée pupita. Hasta luego Lucas te voy a borrar el cerito sexuarl al ataquerl quietooor se calle ustée. Te va a hasé pupitaa al ataquerl quietooor diodenoo ese pedazo de la caidita ese pedazo de. Papaar papaar pupita caballo blanco caballo negroorl papaar papaar torpedo caballo blanco caballo negroorl. Al ataquerl ese pedazo de ese hombree a wan te va a hasé pupitaa llevame al sircoo.',
        'Mariano mariano',
        'https://www.fotonostra.com/fotografia/fotos/fotografiarpaisajes.jpg',
        'December 17, 1995 03:24:00',
        'Deporte'
      ),
      new Post(
        'Tercer post',
        'Lorem fistrum ahorarr tiene musho peligro al ataquerl llevame al sircoo ahorarr benemeritaar por la gloria de mi madre está la cosa muy malar va usté muy cargadoo diodenoo. Diodenoo sexuarl a wan al ataquerl diodeno jarl te voy a borrar el cerito qué dise usteer. Ese pedazo de de la pradera pupita diodenoo al ataquerl me cago en tus muelas mamaar de la pradera me cago en tus muelas condemor. Jarl apetecan está la cosa muy malar caballo blanco caballo negroorl mamaar te va a hasé pupitaa está la cosa muy malar a gramenawer hasta luego Lucas se calle ustée pupita. Hasta luego Lucas te voy a borrar el cerito sexuarl al ataquerl quietooor se calle ustée. Te va a hasé pupitaa al ataquerl quietooor diodenoo ese pedazo de la caidita ese pedazo de. Papaar papaar pupita caballo blanco caballo negroorl papaar papaar torpedo caballo blanco caballo negroorl. Al ataquerl ese pedazo de ese hombree a wan te va a hasé pupitaa llevame al sircoo.',
        'Mariano mariano',
        'https://mott.pe/noticias/wp-content/uploads/2018/11/las-mejores-apps-para-tomar-fotos-de-paisajes-de-paga-y-gratis.png',
        'December 17, 1995 03:24:00',
        'Sociedad'
      ),
    ];
  }

  agregarPost(pPost: Post): void {
    this.arrPosts.push(pPost);
    // console.log(this.arrPosts);
  }

  savePosts(pPost): void {
    const postStr = JSON.stringify(pPost);
    localStorage.setItem('posts', postStr);
  }

  getAllPosts(): Post[] {
    // console.log(this.arrPosts);
    return this.arrPosts;
  }

  getPostsByCategoria(pCat): Post[] {
    const arrEmpleadoCategoria = this.arrPosts.filter(
      (post) => post.categoria === pCat
    );
    return arrEmpleadoCategoria;
  }
}
// TODO Utilizar el local storage para guardar, crear Post[] vacio e ir llenandolo, utilizar el boton para vaciar el local storage
