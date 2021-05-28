import { Post } from "./Post";

export class Blog {
    id: number;
    title: string;
    created: Date;
    userId: number;
    posts: Post[];

    constructor(title: string, created: Date) {
        this.id = 0;
        this.title = title;
        this.created = created;
        this.userId = 5678;
        this.posts = [];
    }
}
