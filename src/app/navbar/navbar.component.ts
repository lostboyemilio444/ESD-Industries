import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { NgIf } from '@angular/common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, HomeComponent, ImpressumComponent, ContactMeComponent,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  
  visible:boolean=false

  MenueIcon:boolean= true

  CloseIcon:boolean= false

  Menue:boolean = true

  MoonIcon:boolean = true

  SunIcon:boolean = false

  onclick(){
    this.Menue = !this.Menue
    this.MenueIcon = !this.MenueIcon
    this.CloseIcon = !this.CloseIcon
    this.visible = !this.visible
  }

  themeIconSwitch(){
    this.MoonIcon = !this.MoonIcon
    this.SunIcon = !this.SunIcon
  }
  presentTheme$ = new BehaviorSubject<string>('theme-light');

  themeChecker(){
    this.presentTheme$.value === 'theme-light'
    ? this.presentTheme$.next('theme-dark')
    : this.presentTheme$.next('theme-light');
  localStorage.setItem('theme', this.presentTheme$.value);
  }
  
  // ){
  // }

  // ngOnInit(): void {
  //   this.sunIcon = document.querySelector<HTMLElement>(".sun")!;
  //   this.moonIcon = document.querySelector<HTMLElement>(".moon")!;
  //   return;
  // }
 
  
  // const userTheme = localStorage.getItem("theme");
  // const systemThem = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // const iconToggle = (): void => {
  //     this.moonIcon?.classList.toggle("hidden");
  //     this.sunIcon?.classList.toggle("hidden");
  // };
  
  // const themeCheck = (): void => {
  //     if (this.userTheme === "dark" || (!this.userTheme && this.systemThem)) {
  //         document.documentElement.classList.add("dark");
  //         this.moonIcon?.classList.add("hidden");
  //         return;
  //     }
  //     this.sunIcon?.classList.add("hidden");
  // };
  
  // const themeSwitch = (): void => {
  //     if (document.documentElement.classList.contains("dark")) {
  //         document.documentElement.classList.remove("dark");
  //         localStorage.setItem("theme", "Light");
  //         this.iconToggle();
  //         return;
  //     }
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //     this.iconToggle();
  // };
  
  // sunIcon?.addEventListener("click", () => {
  //     themeSwitch();
  // });
  
  // this.moonIcon?.addEventListener("click", () => {
  //     console.log("succes");
  //     themeSwitch();
  // });
  
  // themeCheck();
  
}




