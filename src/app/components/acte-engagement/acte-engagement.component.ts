import {Component, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {SelectModule} from 'primeng/select';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-acte-engagement',
  imports: [CardModule, SelectModule, ButtonModule ],
  templateUrl: './acte-engagement.component.html',
  styleUrl: './acte-engagement.component.css'
})
export class ActeEngagementComponent implements OnInit {
  fournisseurs = [
    { nom: 'Digital Connect', score: 91 },
    { nom: 'TechPro Solutions', score: 87 },
    { nom: 'MaghrebTech', score: 78 },
    { nom: 'InfoSery Maroc', score: 72 },
    { nom: 'Atlas IT Services', score: 65 }
  ];

  ngOnInit(): void {
  }
}
