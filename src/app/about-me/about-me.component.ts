import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule, NewsletterComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  @Input() Instagram: string=  "@hannesschlerf"
  @Input() Email: string=  "schlerfhannes@gmail.com"

}
