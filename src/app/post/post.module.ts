import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostPlaceholderComponent } from './add-post-placeholder/add-post-placeholder.component';
import { PostBarComponent } from './post-bar/post-bar.component';
import { TopProfileComponent } from '../shared/top-profile/top-profile.component';
import { PostCommentComponent } from './post-comment/post-comment.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddPostPlaceholderComponent,    
    PostBarComponent,
    TopProfileComponent,
    PostCommentComponent
  ],
  exports:[
    AddPostPlaceholderComponent,    
    PostBarComponent,
    TopProfileComponent,
    PostCommentComponent
  ]
})
export class PostModule { }
