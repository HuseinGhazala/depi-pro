import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../common/contact/contact.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
    selector: 'app-courses-page',
    standalone: true,
    imports: [RouterLink, NavbarComponent, PageBannerComponent, ContactComponent, FooterComponent, BackToTopComponent],
    templateUrl: './courses-page.component.html',
    styleUrl: './courses-page.component.scss'
})
export class CoursesPageComponent {}