import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html'
})
export class PostCommentComponent implements OnInit {

  @Input("comments") cmnt;
  comments;

  constructor() { }

  ngOnInit() {
    this.comments = this.cmnt;
  }

}
