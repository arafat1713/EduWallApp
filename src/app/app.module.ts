import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { OurCoursesComponent } from './components/our-courses/our-courses.component';
import { CtaComponent } from './components/cta/cta.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsPageComponent } from './components/contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { OurOfficeComponent } from './components/our-office/our-office.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServicesComponent,
    OurCoursesComponent,
    CtaComponent,
    TestimonialsComponent,
    ContactUsComponent,
    OurServicesComponent,
    FeaturedProductComponent,
    HomeComponent,
    ContactUsPageComponent,
    AboutUsPageComponent,
    OurOfficeComponent,
    FooterComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
