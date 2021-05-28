import { Location } from '@angular/common';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';



@Component({
  selector: 'app-solo-post',
  templateUrl: './solo-post.component.html',
  styleUrls: ['./solo-post.component.scss']
})
export class SoloPostComponent implements OnInit {

  @Input() blogId: number;

  public comments: Comment[] = [];
  post: Post;
  id: number;
  postId: number;
  content: string = "";

  constructor(private blogsService: BlogService, private router: Router , private route: ActivatedRoute, private locations: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.blogsService.getPost(params.id).subscribe((post: Post) => {
        this.post = post;
      })
    })

    this.route.params.subscribe((params: Params) => {
      this.postId = params['id'];
    })

    this.getComments()

  }

  deletePost() {
    this.route.params.subscribe((params: Params) => {
      this.blogsService.deletePost(params.id).subscribe(() => {
        this.locations.back()
      })
    })
  }

  getComments() {
      this.blogsService.getComments().subscribe((comment: Comment[]) => {
        this.comments = comment.filter((c) => c.postId == this.postId)
      }) 
  }

  createComment() {
    let newComment = new Comment(this.content, this.postId)
    this.blogsService.createComment(newComment).subscribe(() => {
      this.blogsService.getComments().subscribe((comment: Comment[]) => {
        this.comments = comment.filter((c) => c.postId == this.postId) 
      })
      this.content = "";
    })
  }

  goBack() {
    this.locations.back()
  }

}



