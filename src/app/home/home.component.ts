import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ImpressumComponent } from '../impressum/impressum.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, AboutMeComponent, ImpressumComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
