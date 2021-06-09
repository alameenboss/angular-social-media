import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/service/post.service';

@Component({
  selector: 'app-post-bar',
  templateUrl: './post-bar.component.html'
})
export class PostBarComponent implements OnInit {
  posts;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.posts = this.postService.GetPost();
  }
}
