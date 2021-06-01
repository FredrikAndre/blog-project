import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private blogsService: BlogService, private router: Router , private route: ActivatedRoute) { }

  title: string;
  content: string;
  blogId: number;
  id: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.blogId = params['id'];
    })
  }

  createPost() {
    let newPost = new Post(
      this.title, 
      this.content,
      new Date(),
      this.blogId, 
      this.id
    )
    
    this.blogsService.createPosts(newPost).subscribe((post: Post) => {
      this.router.navigate(['blogs/', this.blogId])
    })
  }

  cancel(): void {
    this.router.navigate(['blogs/', this.blogId]);
  }

}
