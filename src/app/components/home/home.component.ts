import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  languages = [
    { name: 'Inglés', level: '98%', icon: '🇬🇧' },
    { name: 'Francés', level: '85%', icon: '🇫🇷' },
    { name: 'Alemán', level: '75%', icon: '🇩🇪' },
    { name: 'Italiano', level: '90%', icon: '🇮🇹' }
  ];
}
