import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavList } from '../models';
import { butterService } from '../services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  navList!: any[];
  private subscription!: Subscription;

  ngOnInit() {
    this.fetchNav()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  fetchNav() {

    butterService.content.retrieve(["nav"], {}).then( (resp) => {
      console.log(resp)
      console.log( resp.data?.data?.nav)
      this.navList = resp.data?.data?.nav || []
    });
  }

  goto(slug: any) {
    this.router.navigate([`/` + slug]);
  }
}