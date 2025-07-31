import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brief } from '../models/brief.model';

@Injectable({
  providedIn: 'root'
})
export class BriefService {
  private apiUrl = 'http://localhost:8080/api/briefs';

  constructor(private http: HttpClient) {}

  getAllBriefs(): Observable<Brief[]> {
    return this.http.get<Brief[]>(this.apiUrl);
  }

  getBriefById(id: number): Observable<Brief> {
    return this.http.get<Brief>(`${this.apiUrl}/${id}`);
  }

  createBrief(brief: Brief): Observable<Brief> {
    return this.http.post<Brief>(this.apiUrl, brief);
  }

  assignCompetences(briefId: number, competenceIds: number[]): Observable<Brief> {
    return this.http.put<Brief>(`${this.apiUrl}/${briefId}/competences`, competenceIds);
  }
}
