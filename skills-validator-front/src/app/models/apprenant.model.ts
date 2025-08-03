export interface ApprenantDTO {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  dateNaissance?: Date;
  niveau?: string;
  specialite?: string;
  dateInscription?: Date;
}

export interface RenduDto {
  id?: number;
  titre: string;
  description?: string;
  fichierUrl?: string;
  dateDepot?: Date;
  statut?: string;
  note?: number;
  commentaire?: string;
  apprenantId?: number;
} 