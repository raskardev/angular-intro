import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import Post from '../models/Post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit, OnDestroy {
  postsList: Post[] = [];
  fetchPostsSub: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.fetchPostsSub = this.postService
      .fetchPosts()
      .subscribe(posts => (this.postsList = posts));
  }

  ngOnDestroy(): void {
    this.fetchPostsSub.unsubscribe();
  }
}
