import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {


  @Input() post: Post;
  @Input() comment: Comment;

  public posts: Post[];
  public comments: Comment[];

  constructor() { }

  ngOnInit(): void {
  }

}
