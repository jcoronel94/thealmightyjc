import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogPostListingComponent } from './blog-post-listing/blog-post-listing.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogPostListingComponent},
  {path: 'blog/:slug', component: BlogPostComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
