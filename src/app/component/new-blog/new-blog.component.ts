import { Component, Input, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {
  
  @Input() blogId: number;
  
  public blogs: Blog[] = [];
  blog: Blog;
  title: string;
  id: number;

  constructor(private blogsService: BlogService, private router: Router) { }

  ngOnInit(): void {
   
  }

  createBlog() {
    let newBlog = new Blog(this.title, new Date())
    this.blogsService.createBlog(newBlog).subscribe((blog) => {
      this.blogs.push((blog))
      this.router.navigate(['/blogs/', blog.id])
    });

  }

  cancel(): void {
    this.router.navigate(['/blogs']);
  }


}
