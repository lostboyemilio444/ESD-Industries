import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.css'
})
export class ImpressumComponent {
  @Input()email1:string = "Mail: eliano.darabi@gmail.com";
  @Input()email2:string = "Mail: hannessschlerf@gmail.com";

}
