import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  blog: Blog;

  constructor(private blogsService: BlogService, private route: ActivatedRoute, private router: Router) { }

  blogId: number;
  title: string;

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.blogId = params['id'];
        this.blogsService.getBlog(this.blogId).subscribe((blog: Blog) => {
          this.blog = blog;
        })
    })

  }

  onFormSubmit() {
    let updatedBlog = new Blog(this.blog.title, this.blog.created)
    updatedBlog.id = this.blog.id;
  
    this.blogsService.updateBlog(updatedBlog).subscribe(() => {
      this.router.navigate(['blogs/', this.blogId])
    })
  }

  cancel(): void {
    this.router.navigate(['/blogs', this.blogId]);
  }

}

