  
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {butterService} from '../services';
import {map, take} from 'rxjs/operators';


@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit {

    constructor(protected route: ActivatedRoute) {
    }

    protected slug$!: Observable<string>;
    public post!:any

    ngOnInit() {
        this.slug$ = this.route.paramMap
            .pipe(
                map(params => (params.get('slug')))
            ) as Observable<string>;

        this.slug$.pipe(
            take(1))
            .subscribe(slug => {
                butterService.post.retrieve(slug)
                    .then((res) => {
                        this.post = res.data;
                        console.log(this.post)
                    }).catch((res) => {
                    console.log(res);
                });
            });
    }
}