import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NavComponent } from './nav/nav.component';
import { BlogPostListingComponent } from './blog-post-listing/blog-post-listing.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './shared/app-material.module';
import { AboutComponent } from './about/about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';
import { AnimatedCardComponent } from './animated-card/animated-card.component';
import { TransclusionComponent } from './transclusion/transclusion.component';
import { HeadlineComponent } from './headline/headline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlogPostListingComponent,
    HomeComponent,
    AboutComponent,
    BlogPostComponent,
    FlipCardsComponent,
    AnimatedCardComponent,
    TransclusionComponent,
    HeadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
