import { Component,PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CaruselComponent } from './carusel/carusel.component';
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent, ContactMeComponent, HomeComponent, 
    ImpressumComponent, NavbarComponent, NgIf, CaruselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // sunIcon = document.querySelector(".sun");
 visible:boolean=false

 visible2:boolean=false
 Terms:boolean= true

 onclick2(){
  this.Terms = !this.Terms
  this.visible2 = !this.visible2
 }

  Newsletter:boolean = true
onclick(){
  this.Newsletter = !this.Newsletter
  this.visible = !this.visible
}

      
  
title = 'web-app';
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    initFlowbite();
  }
}
}
