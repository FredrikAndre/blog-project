import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BlogViewComponent } from './component/blog-view/blog-view.component';
import { NewBlogComponent } from './component/new-blog/new-blog.component';
import { PostViewComponent } from './component/post-view/post-view.component';
import { NewPostComponent } from './component/new-post/new-post.component';
import { SoloPostComponent } from './component/solo-post/solo-post.component';
import { CommentViewComponent } from './component/comment-view/comment-view.component';
import { EditBlogComponent } from './component/edit-blog/edit-blog.component';
import { EditPostComponent } from './component/edit-post/edit-post.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent,
    NewBlogComponent,
    PostViewComponent,
    NewPostComponent,
    SoloPostComponent,
    CommentViewComponent,
    EditBlogComponent,
    EditPostComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
