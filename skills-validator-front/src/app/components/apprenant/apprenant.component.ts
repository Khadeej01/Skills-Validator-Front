import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApprenantService } from '../../services/apprenant.service';
import { ApprenantDTO, RenduDto } from '../../models/apprenant.model';

@Component({
  selector: 'app-apprenant',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent implements OnInit {
  apprenants: ApprenantDTO[] = [];
  selectedApprenant: ApprenantDTO | null = null;
  isEditing = false;
  isAdding = false;
  apprenantForm: FormGroup;
  rendus: RenduDto[] = [];
  showRendus = false;

  constructor(
    private apprenantService: ApprenantService,
    private fb: FormBuilder
  ) {
    this.apprenantForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      dateNaissance: [''],
      niveau: [''],
      specialite: ['']
    });
  }

  ngOnInit(): void {
    this.loadApprenants();
  }

  loadApprenants(): void {
    this.apprenantService.getAllApprenants().subscribe({
      next: (data) => {
        this.apprenants = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des apprenants:', error);
      }
    });
  }

  addApprenant(): void {
    this.isAdding = true;
    this.isEditing = false;
    this.selectedApprenant = null;
    this.apprenantForm.reset();
  }

  editApprenant(apprenant: ApprenantDTO): void {
    this.selectedApprenant = apprenant;
    this.isEditing = true;
    this.isAdding = false;
    this.apprenantForm.patchValue({
      nom: apprenant.nom,
      prenom: apprenant.prenom,
      email: apprenant.email,
      telephone: apprenant.telephone || '',
      dateNaissance: apprenant.dateNaissance ? new Date(apprenant.dateNaissance).toISOString().split('T')[0] : '',
      niveau: apprenant.niveau || '',
      specialite: apprenant.specialite || ''
    });
  }

  saveApprenant(): void {
    if (this.apprenantForm.valid) {
      const apprenantData = this.apprenantForm.value;
      
      if (this.isAdding) {
        this.apprenantService.inscrire(apprenantData).subscribe({
          next: (data) => {
            this.apprenants.push(data);
            this.resetForm();
          },
          error: (error) => {
            console.error('Erreur lors de l\'inscription:', error);
          }
        });
      } else if (this.isEditing && this.selectedApprenant) {
        this.apprenantService.updateApprenant(this.selectedApprenant.id!, apprenantData).subscribe({
          next: (data) => {
            const index = this.apprenants.findIndex(a => a.id === this.selectedApprenant!.id);
            if (index !== -1) {
              this.apprenants[index] = data;
            }
            this.resetForm();
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour:', error);
          }
        });
      }
    }
  }

  deleteApprenant(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet apprenant ?')) {
      this.apprenantService.deleteApprenant(id).subscribe({
        next: () => {
          this.apprenants = this.apprenants.filter(a => a.id !== id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        }
      });
    }
  }

  viewRendus(apprenantId: number): void {
    this.apprenantService.getRendusByApprenant(apprenantId).subscribe({
      next: (data) => {
        this.rendus = data;
        this.showRendus = true;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des rendus:', error);
      }
    });
  }

  resetForm(): void {
    this.isAdding = false;
    this.isEditing = false;
    this.selectedApprenant = null;
    this.apprenantForm.reset();
  }

  cancel(): void {
    this.resetForm();
  }
} 