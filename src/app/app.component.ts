import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CpsComponent} from './components/cps/cps.component';
import {AnalyseComponent} from './components/analyse/analyse.component';
import {ActeEngagementComponent} from './components/acte-engagement/acte-engagement.component';
import {AppelOffreComponent} from './components/appel-offre/appel-offre.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, NavbarComponent, CpsComponent, AnalyseComponent, ActeEngagementComponent, AppelOffreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'automatisation_processus_achat_app';
}
