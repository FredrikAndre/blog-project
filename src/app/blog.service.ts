import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './models/Blog';
import { Post } from './models/Post';
import { Comment } from './models/Comment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs: Blog[] = []

  constructor(private _http:HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    const userId = 5678;
    return this._http.get<Blog[]>('https://mi-blogs.azurewebsites.net/api/Blogs/user/' + userId)
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this._http.post<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/', blog)
  }

  updateBlog(blog: Blog): Observable<Blog> {
    const url = `${'https://mi-blogs.azurewebsites.net/api/Blogs'}/${blog.id}`;
    return this._http.put<Blog>(url, blog)
  }

  getBlog(id: number): Observable<Blog> {
    return this._http.get<Blog>('https://mi-blogs.azurewebsites.net/api/Blogs/' + id);
  }

  deleteBlog(blog: Blog): Observable<Blog> {
    const url = `${'https://mi-blogs.azurewebsites.net/api/Blogs'}/${blog.id}`;
    return this._http.delete<Blog>(url);
  }

  // Posts!

  getBlogPosts(post: Post): Observable<Post[]> {
    return this._http.get<Post[]>('https://mi-blogs.azurewebsites.net/api/Posts');
  }

  getPost(id: number): Observable<Post> {
    return this._http.get<Post>('https://mi-blogs.azurewebsites.net/api/Posts/' + id);
  }

  createPosts(post: Post): Observable<Post> {
    return this._http.post<Post>('https://mi-blogs.azurewebsites.net/api/Posts', post)
  }

  deletePost(id: number): Observable<Post> {
    return this._http.delete<Post>('https://mi-blogs.azurewebsites.net/api/Posts/' + id);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${'https://mi-blogs.azurewebsites.net/api/Posts'}/${post.id}`;
    return this._http.put<Post>(url, post)
  }

  
  // Comments

  getComments(): Observable<Comment[]> {
    return this._http.get<Comment[]>('https://mi-blogs.azurewebsites.net/api/Comments')
  }

  createComment(comment: Comment): Observable<Comment> {
    return this._http.post<Comment>('https://mi-blogs.azurewebsites.net/api/Comments', comment)
  }

}
