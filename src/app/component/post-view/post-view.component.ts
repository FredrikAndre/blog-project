import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  
  @Input() blog: Blog;
  @Input() post: Post;
  @Input() blogId: number;

  public blogs: Blog[];
  public posts: Post[];
 
  constructor( private blogsService: BlogService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
   
  }
  
}
