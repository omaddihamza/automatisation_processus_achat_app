import {Component, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {NgClass, NgForOf} from '@angular/common';
import {TagModule} from 'primeng/tag';


@Component({
  selector: 'app-analyse',
  imports: [CardModule, TableModule, TagModule, NgClass, NgForOf],
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.css'
})
export class AnalyseComponent implements OnInit {

  fournisseurs = [
    { nom: 'Digital Connect', score: 91 },
    { nom: 'TechPro Solutions', score: 87 },
    { nom: 'MaghrebTech', score: 78 },
    { nom: 'InfoSery Maroc', score: 72 },
    { nom: 'Atlas IT Services', score: 65 }
  ];
  ecarts = [
    { categorie: 'TECHNIQUE', exigence: 'Processeur Intel i7 12ème génération minimum', proposition: 'Intel i7-13700K - 13ème génération', statut: 'Conforme' },
    { categorie: 'TECHNIQUE', exigence: 'RAM 16 Go DDR5 minimum', proposition: 'RAM 8 Go DDR4', statut: 'Non conforme' },
    { categorie: 'FINANCIER', exigence: 'Prix unitaire ≤ 12 000 MAD', proposition: 'Prix unitaire: 11 500 MAD', statut: 'Conforme' },
    { categorie: 'GARANTIE', exigence: 'Garantie 3 ans sur site', proposition: 'Garantie 2 ans, retour atelier', statut: 'Partiel' },
    { categorie: 'LIVRAISON', exigence: 'Délai de livraison < 30 jours', proposition: 'Délai de livraison 45 jours', statut: 'Non conforme' },
    { categorie: 'TECHNIQUE', exigence: 'SSD NVMe 512 Go minimum', proposition: 'SSD NVMe 1 To', statut: 'Conforme' },
    { categorie: 'CONFORMITÉ', exigence: 'Certification ISO 9001', proposition: 'Certification ISO 9001:2015 validée', statut: 'Conforme' }
  ];



  constructor() {
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }


  getSeverity(statut: any) {
    switch (statut) {
      case 'Conforme':
        return 'success';
      case 'Partiel':
        return 'warn';
      case 'Non conforme':
        return 'danger';
      default:
        return 'info';
    }
  }

  getIcon(statut: any) {
    switch (statut) {
      case 'Conforme':
        return 'pi pi-check-circle';
      case 'Partiel':
        return 'pi pi-exclamation-triangle';
      case 'Non conforme':
        return 'pi pi-times-circle';
      default:
        return 'pi pi-info-circle';
    }
  }
}
