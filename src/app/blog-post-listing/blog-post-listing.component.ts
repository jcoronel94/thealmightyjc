import { Component, OnInit } from '@angular/core';
import { butterService } from '../services';

@Component({
  selector: 'app-blog-post-listing',
  templateUrl: './blog-post-listing.component.html',
  styleUrls: ['./blog-post-listing.component.scss']
})
export class BlogPostListingComponent implements OnInit {
  public posts!: any[];
  rendering!: any;

  constructor() {
  }

  async ngOnInit() {
    this.rendering = await this.getContent()
    this.posts  = (await this.getPost(1, 10))?.data?.data || [];

  }


  getContent() {
    return butterService.page.retrieve('*', 'blog-list')
  }


  getPost(page : any, size : any) {
    return butterService.post.list({
      page: page,
      page_size: size
    })
  }

}