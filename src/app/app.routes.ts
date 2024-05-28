import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
 
    {
        path: 'contactme',
        component: ContactMeComponent,
        title: 'Contact me',
    },
    {
        path:"aboutme",
        component: AboutMeComponent,
        title: "ESB ABOUT",
    },
    {
        path:"",
        component: HomeComponent,
        title: "ESB HOME",
    },
    {
        path:"Impressum",
        component: ImpressumComponent,
        title: "ESB IMPRESSUM",
    },
    {
        path:"termsandconditions",
        component: TermsAndConditionsComponent,
        title: "Terms and Conditions",
    }
  

 
];
