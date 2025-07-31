import { Component, OnInit } from '@angular/core';
import {Brief} from '../../models/brief.model';
import {BriefService} from '../../services/breif-service.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class BriefComponent implements OnInit {
  briefs: Brief[] = [];
  newBrief: Brief = {
    contexte: '',
    outils: '',
    livrable: '',
    competenceIds: []
  };
  competenceInput = '';

  constructor(private briefService: BriefService) {}

  ngOnInit(): void {
    this.loadBriefs();
  }

  loadBriefs() {
    this.briefService.getAllBriefs().subscribe(data => {
      this.briefs = data;
    });
  }

  createBrief() {
    // Convertir les compétences entrées en nombres
    this.newBrief.competenceIds = this.competenceInput
      .split(',')
      .map(id => Number(id.trim()))
      .filter(id => !isNaN(id));

    this.briefService.createBrief(this.newBrief).subscribe(() => {
      this.newBrief = { contexte: '', outils: '', livrable: '', competenceIds: [] };
      this.competenceInput = '';
      this.loadBriefs();
    });
  }
}
