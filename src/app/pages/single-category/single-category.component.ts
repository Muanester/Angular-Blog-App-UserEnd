import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css',
})
export class SingleCategoryComponent implements OnInit {
  postsArray: Array<any>;
  categoryObj: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (val) => {
        this.categoryObj = val;

        this.postService.loadCategoryPost(val['id']).subscribe({
          next: (post) => {
            this.postsArray = post;
          },
        });
      },
    });
  }
}
