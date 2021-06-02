import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogViewComponent } from './component/blog-view/blog-view.component';
import { EditBlogComponent } from './component/edit-blog/edit-blog.component';
import { EditPostComponent } from './component/edit-post/edit-post.component';
import { NewBlogComponent } from './component/new-blog/new-blog.component';
import { NewPostComponent } from './component/new-post/new-post.component';
import { PostViewComponent } from './component/post-view/post-view.component';
import { SoloPostComponent } from './component/solo-post/solo-post.component';

export const routes: Routes = [
  { path: "", redirectTo: 'blogs', pathMatch: 'full' },
  { path: "new-blog", component: NewBlogComponent},
  { path: "edit-blog/:id", component: EditBlogComponent, pathMatch: 'full'},
  { path: "blogs/:id/posts/:id/edit-post/:id", component: EditPostComponent, pathMatch: 'full' }, 
  { path: "blogs/:id", component: BlogViewComponent},
  { path: "blogs/:id/new-post", component: NewPostComponent},
  { path: "blogs", component: BlogViewComponent},
  { path: "blogs/:id/posts/:id", component: SoloPostComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
