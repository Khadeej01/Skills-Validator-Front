import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = [
    {
      title: 'Plateforme',
      links: [
        { label: 'Accueil', path: '/' },
        { label: 'Apprenants', path: '/apprenants' },
        { label: 'Briefs', path: '/briefs' },
        { label: 'Connexion', path: '/auth' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Documentation', path: '/docs' },
        { label: 'Contact', path: '/contact' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Aide', path: '/help' }
      ]
    },
    {
      title: 'Légal',
      links: [
        { label: 'Confidentialité', path: '/privacy' },
        { label: 'Conditions', path: '/terms' },
        { label: 'Cookies', path: '/cookies' },
        { label: 'Mentions légales', path: '/legal' }
      ]
    }
  ];

  socialLinks = [
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fab fa-linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: '#', label: 'GitHub' },
    { icon: 'fab fa-youtube', url: '#', label: 'YouTube' }
  ];
} 