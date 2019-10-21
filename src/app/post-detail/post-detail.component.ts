import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import Post from '../models/Post';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit, OnDestroy {
  post: Post;
  private fetchPostSub: Subscription;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');

    this.fetchPostSub = this.postService
      .fetchPost(postId)
      .subscribe(post => (this.post = post));
  }

  ngOnDestroy(): void {
    this.fetchPostSub.unsubscribe();
  }
}
