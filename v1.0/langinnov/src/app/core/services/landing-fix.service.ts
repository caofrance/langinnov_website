import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class LandingFixService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

 // Add or Remove class

  // Blog Page
  public addFixBlog() {
     this.document.body.classList.add('blog-page');
  }

  public removeFixBlog() {
     this.document.body.classList.remove('blog-page');
  }

  // Blog Page Details
  public addFixBlogDetails() {
     this.document.body.classList.add('blog-page');
     this.document.body.classList.add('blog-detail');
  }

  public removeFixBlogDetails() {
     this.document.body.classList.remove('blog-page');
     this.document.body.classList.remove('blog-detail');
  }
}
