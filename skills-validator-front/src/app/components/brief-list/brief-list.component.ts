import { Component, OnInit } from '@angular/core';
import { Brief } from '../../models/brief.model';
import { BriefService } from '../../services/breif-service.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-brief-list',
  templateUrl: './brief-list.component.html',
  styleUrls: ['./brief-list.component.css'],
  standalone: true,
  imports: [NgForOf],
})
export class BriefListComponent implements OnInit {
  briefs: Brief[] = [];

  constructor(private briefService: BriefService) {}

  ngOnInit(): void {
    this.loadBriefs();
  }

  loadBriefs() {
    this.briefService.getAllBriefs().subscribe(data => {
      this.briefs = data;
    });
  }
}
