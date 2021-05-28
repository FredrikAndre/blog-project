import { Comment } from '../models/Comment';
const newDate = new Date();

export class Post {
    id: number;
    title: string;
    content: string;
    created: Date;
    modified: string;
    blogId: number;
    comments: Comment[];

    constructor(title: string, content: string, created: Date, blogId: number, id: number) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.created = created;
        this.modified = newDate.toISOString();
        this.blogId = blogId;
        this.comments = [];
    }
}