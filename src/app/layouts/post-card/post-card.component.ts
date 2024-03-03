import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent implements OnInit {
  @Input() postData: any;
  postImgUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.postData && this.postData.data && this.postData.data.postImgPath) {
      this.postImgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.postData.data.postImgPath
      );
    }
  }
}
