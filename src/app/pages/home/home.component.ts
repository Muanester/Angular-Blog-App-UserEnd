import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  featuredPostsArray: Array<any>;

  constructor(private postService: PostsService) {
    this.postService.loadFeatured().subscribe({
      next: (data) => {
        this.featuredPostsArray = data;
      },
    });
  }
}
