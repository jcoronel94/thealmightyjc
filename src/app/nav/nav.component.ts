import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {NavList} from '../models';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

    constructor(private router: Router) {
    }

    navList!: NavList;
    private subscription!: Subscription;

    ngOnInit() {
        this.createTopNavItems();
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private createTopNavItems() {
        this.navList = {
            home: [
                {
                    textContent: 'Home',
                    icon: 'home',
                    svg: true,
                    click: () => this.gotoHome()
                }
            ],
            commonItems: [
                {
                    textContent: 'Customer',
                    icon: undefined,
                    click: () => this.gotoCustomer()
                },
                {
                    textContent: 'FAQ',
                    icon: undefined,
                    click: () => this.gotoFaq()
                },
                {
                    textContent: 'Blog Posts',
                    icon: undefined,
                    click: () => this.gotoBlogPosts()
                },
                {
                    textContent: 'RSS, Atom & Sitemap',
                    icon: undefined,
                    click: () => this.gotoMisc()
                }
            ]
        };
    }

    gotoHome() {
        this.router.navigate([`/home`]);
    }

    gotoCustomer() {
        this.router.navigate([`/customer`]);
    }

    gotoFaq() {
        this.router.navigate([`/faq`]);
    }

    gotoBlogPosts() {
        this.router.navigate([`/blog`]);
    }

    gotoMisc() {
        this.router.navigate([`/rss`]);
    }
}