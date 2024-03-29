import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css',
})
export class CategoryNavbarComponent implements OnInit {
  categoryArray: Array<any>;

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe({
      next: (data) => {
        this.categoryArray = data;
      },
    });
  }
}
