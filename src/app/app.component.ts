import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent, ContactMeComponent, HomeComponent, 
    ImpressumComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // sunIcon = document.querySelector(".sun");
  // moonIcon = document.querySelector(".moon")

  // userTheme = localStorage.getItem("theme");
  // systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//   iconToggle(): void {
//     this.moonIcon?.classList.toggle("hidden");
//     this.sunIcon?.classList.toggle("hidden");
//   };

//   themeCheck(): void {
//     if(this.userTheme === "dark" || (!this.userTheme && this.systemTheme)){
//       document.documentElement.classList.add("dark");
//       this.moonIcon?.classList.add("hidden");
//       return;
//     }
//       this.sunIcon?.classList.add("hidden");
//   };

   

//   const themeSwitch (): void {
//     if(document.documentElement.classList.contains("dark")){
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       this.iconToggle();
//       return;
//     } 
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     this.iconToggle();
    
// };
      
  

  title = 'MyPortfolio';
}
