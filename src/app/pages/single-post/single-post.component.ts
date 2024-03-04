import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent implements OnInit {
  singlePostData: any;
  similarPostArray: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (val) => {
        this.postService.loadOnePost(val['id']).subscribe({
          next: (post) => {
            this.singlePostData = post;
            this.loadSimilarPosts(this.singlePostData.category.categoryId);
          },
        });
      },
    });
  }

  loadSimilarPosts(catId: any) {
    this.postService.loadSimilar(catId).subscribe({
      next: (post) => {
        this.similarPostArray = post;
      },
    });
  }
}
