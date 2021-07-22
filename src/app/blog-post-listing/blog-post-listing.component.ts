import { Component, OnInit } from '@angular/core';
import { butterService } from '../services';

@Component({
  selector: 'app-blog-post-listing',
  templateUrl: './blog-post-listing.component.html',
  styleUrls: ['./blog-post-listing.component.scss']
})
export class BlogPostListingComponent implements OnInit {
  public posts!: any[];
  public data!:any;
  rendering!: any;
  pagesize=3
  count=0;
  pageSizeOptions: number[] = [3, 5, 25];

  constructor() {
  }

  async ngOnInit() {
    this.rendering = await this.getContent()
    // this.data  = (await this.getPost(1, this.pagesize));
    // this.posts = this.data?.data?.data || [];
    await this.changePage({pageIndex:0});
    console.log(this.data)
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

  async changePage(index:any){
    console.log(index)
    this.data  = (await this.getPost(index?.pageIndex + 1, this.pagesize));
    this.posts = this.data?.data?.data || [];
    // this.getPost = (await this.getPost(index?.pageIndex + 1, this.pagesize))?.data?.data || [];
  }

}