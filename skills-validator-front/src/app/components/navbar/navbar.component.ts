import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navItems = [
    { path: '/', label: 'Accueil', icon: 'fas fa-home' },
    { path: '/auth', label: 'Connexion', icon: 'fas fa-sign-in-alt' },
    { path: '/apprenants', label: 'Apprenants', icon: 'fas fa-user-graduate' },
    { path: '/briefs', label: 'Briefs', icon: 'fas fa-file-alt' }
  ];
} 