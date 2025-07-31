import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BriefComponent} from './components/brief/brief.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BriefComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skills-validator-front';
}
