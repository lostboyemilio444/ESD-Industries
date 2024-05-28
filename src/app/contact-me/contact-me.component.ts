import { Component } from '@angular/core';
import {RouterModule } from '@angular/router';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [RouterModule,TermsAndConditionsComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

}
