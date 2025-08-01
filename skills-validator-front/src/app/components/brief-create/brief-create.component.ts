import { Component, EventEmitter, Output } from '@angular/core';
import { Brief } from '../../models/brief.model';
import { BriefService } from '../../services/breif-service.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-brief-create',
  templateUrl: './brief-create.component.html',
  styleUrls: ['./brief-create.component.css'],
  standalone: true,
  imports: [
    FormsModule
  ],
})
export class BriefCreateComponent {
  newBrief: Brief = {
    contexte: '',
    titre: '',
    outils: '',
    livrable: '',
    competenceIds: []
  };
  competenceInput = '';

  @Output() briefCreated = new EventEmitter<void>();

  constructor(private briefService: BriefService) {}

  createBrief() {
    this.newBrief.competenceIds = this.competenceInput
      .split(',')
      .map(id => Number(id.trim()))
      .filter(id => !isNaN(id));

    this.briefService.createBrief(this.newBrief).subscribe(() => {
      this.newBrief = { contexte: '', titre: '' ,outils: '', livrable: '', competenceIds: [] };
      this.competenceInput = '';
      this.briefCreated.emit();
    });
  }
}
