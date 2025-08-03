import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApprenantDTO, RenduDto } from '../models/apprenant.model';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {
  private apiUrl = 'http://localhost:8080/apprenants'; // Ajustez l'URL selon votre backend

  constructor(private http: HttpClient) { }

  // Inscrire un nouvel apprenant
  inscrire(apprenant: ApprenantDTO): Observable<ApprenantDTO> {
    return this.http.post<ApprenantDTO>(`${this.apiUrl}/inscription`, apprenant);
  }

  // Récupérer un apprenant par ID
  getApprenantById(id: number): Observable<ApprenantDTO> {
    return this.http.get<ApprenantDTO>(`${this.apiUrl}/${id}`);
  }

  // Récupérer tous les apprenants
  getAllApprenants(): Observable<ApprenantDTO[]> {
    return this.http.get<ApprenantDTO[]>(this.apiUrl);
  }

  // Mettre à jour un apprenant
  updateApprenant(id: number, apprenant: ApprenantDTO): Observable<ApprenantDTO> {
    return this.http.put<ApprenantDTO>(`${this.apiUrl}/${id}`, apprenant);
  }

  // Supprimer un apprenant
  deleteApprenant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 