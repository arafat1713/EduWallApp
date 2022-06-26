import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsPageComponent } from './components/contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'our-services', component: OurServicesComponent  },
  { path: 'about-us', component: AboutUsPageComponent  },
  { path: 'contact-us', component: ContactUsPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
