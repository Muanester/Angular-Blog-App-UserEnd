import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  featuredPostsArray: Array<any>;
  latestPostsArray: Array<any>;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe({
      next: (data) => {
        this.featuredPostsArray = data;
      },
    });

    this.postService.loadLatest().subscribe({
      next: (data) => {
        this.latestPostsArray = data;
      },
    });
  }
}
