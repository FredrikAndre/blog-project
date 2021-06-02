import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { BlogService } from 'src/app/blog.service';
import { Post } from 'src/app/models/Post';
import { Blog } from '../../models/Blog';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  animations: [
    trigger('postEntry', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        animate(70)
      ])
    ])
  ]
})
export class BlogViewComponent implements OnInit {

  public blogs: Blog[] = [];
  public posts: Post[] = [];
  blog: Blog;
  id: number;
  blogId: number;

  constructor(private blogsService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.blogsService.getBlogs()
    .subscribe((blogs) => {
      this.blogs = blogs.reverse();
    });

    this.getPosts();
  }

  getPosts() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
      this.blogsService.getBlogPosts(params.id).subscribe((posts: Post[]) => {
        this.posts = posts.filter((p) => p.blogId == params.id).reverse()
      })
      }
    })
  }

  deleteBlog(remove: Blog) {
    this.blogsService.deleteBlog(remove)
    .subscribe(() => {
      this.blogs = this.blogs.filter((b) => b.id !== remove.id)
      this.router.navigate(['/blogs'])
    });
  }

}

