import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ProgrammationComponent } from '../../tuiles/programmation/programmation.component';

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

    title  = "Portefolio Librairie Koneko";
    welcomeText = "Bienvenue dans mon Portefolio de Dev, Application construite à la main en Angular 19. L'application va recenser la plupart de mes connaissances en Dev."

    tuiles = [
      {
        name: 'Programmation',
        description: 'Révision des concepts de programmations de basiques',
        icon: '../assets/icons/dev.png',
        route: '/programmation'
      },
      {
        name: 'HTML/CSS',
        description: 'Composants disponibles préfabriqués HTML avec CSS dynamique',
        route: '/composant1'
      },
      {
        name: 'Back',
        description: 'Appels vers le back',
        route: '/composant1'
      },
      {
        name: 'Git',
        description: 'Toutes  les tips Git',
        route: '/composant1'
      }
    ];


}
