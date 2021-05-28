import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  blog: Blog
  post: Post

  constructor(private blogsService: BlogService, private route: ActivatedRoute, private router: Router, private locations: Location) { }

  title: string;
  content: string;
  id: number;
  blogId: number;

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
        this.blogsService.getPost(this.id).subscribe((post: Post) => {
          this.post = post;
          console.log(post)
        })
    })
  }


  updatePost() {
    let updatedPost = new Post(
      this.post.title, 
      this.post.content,
      this.post.created, 
      this.post.blogId, 
      this.id
    )

    this.blogsService.updatePost(updatedPost).subscribe(() => {
      this.blogsService.getPost(this.id).subscribe((post: Post) => {
        this.post = post;
        console.log(post)
      })
      this.locations.back()
    })
  }

  cancel() {
    this.locations.back()
  }

}
