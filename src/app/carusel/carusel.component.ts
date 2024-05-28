import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
})
export class CaruselComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}

