import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostService } from './services/post.service';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [AppComponent, PostsListComponent, PostDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
