import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css'
})
export class ImpressumComponent {
  @Input()email:string = "Mail: esd.industries@gmail.com";
}
