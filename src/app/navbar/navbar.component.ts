import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, HomeComponent, ImpressumComponent, ContactMeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  
openMenue(){
  let menueButton: HTMLElement = document.getElementById('menue-button')!;
  console.log(menueButton)
  menueButton.addEventListener("click", () => {
    console.log("button works")
  });
}

}

