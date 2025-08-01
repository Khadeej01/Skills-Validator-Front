import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      icon: 'fas fa-user-graduate',
      title: 'Gestion des Apprenants',
      description: 'Gérez facilement les profils et les compétences de vos apprenants avec une interface intuitive.',
      gradient: 'from-blue-500 to-cyan-500',
      link: '/apprenants'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Gestion des Briefs',
      description: 'Créez et assignez des briefs personnalisés pour évaluer les compétences de manière structurée.',
      gradient: 'from-purple-500 to-pink-500',
      link: '/briefs'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Suivi des Progrès',
      description: 'Suivez l\'évolution des compétences de vos apprenants avec des graphiques détaillés.',
      gradient: 'from-green-500 to-emerald-500',
      link: '/dashboard'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Validation des Compétences',
      description: 'Validez et certifiez les compétences acquises avec des badges et certificats.',
      gradient: 'from-orange-500 to-red-500',
      link: '/validation'
    }
  ];

  stats = [
    { number: '150+', label: 'Apprenants actifs', icon: 'fas fa-users' },
    { number: '50+', label: 'Briefs créés', icon: 'fas fa-file-alt' },
    { number: '95%', label: 'Taux de satisfaction', icon: 'fas fa-heart' },
    { number: '24/7', label: 'Support disponible', icon: 'fas fa-headset' }
  ];

  testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Formatrice',
      content: 'Cette plateforme a révolutionné ma façon de gérer les compétences de mes apprenants. Interface intuitive et fonctionnalités puissantes.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Thomas Martin',
      role: 'Responsable Formation',
      content: 'Excellent outil pour le suivi des compétences. Les rapports sont détaillés et nous permettent de prendre de meilleures décisions.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sophie Bernard',
      role: 'Apprenante',
      content: 'J\'adore pouvoir suivre mes progrès et recevoir des badges pour mes compétences. Cela me motive vraiment !',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];
}
