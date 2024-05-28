import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { EventEmitter } from 'stream';
import { Output} from '@angular/core';


@Component({
  selector: 'app-newsletter-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './newsletter-button.component.html',
  styleUrl: './newsletter-button.component.css'
})
export class NewsletterButtonComponent {
//  visible:boolean=false

//   @Output() newsletter = new EventEmitter<boolean>();

// onclick(value: boolean){
//  this.newsletter.emit(true);
// }
}
