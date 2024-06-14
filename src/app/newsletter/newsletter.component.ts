import { Component } from '@angular/core';
import { CaruselComponent } from '../carusel/carusel.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CaruselComponent, NgIf],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {

  Terms:boolean = false
  newsletter:boolean = false
 
newsletterOpen(){
  this.newsletter = !this.newsletter
}

  DatenschutzOpen(){
    this.Terms = !this.Terms
  }
  DatenschutzClose(){
    this.Terms = !this.Terms
  }

  NewsletterClose(){
    this.newsletter = !this.newsletter
  }
}

