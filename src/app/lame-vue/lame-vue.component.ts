import { Component } from '@angular/core';

@Component({
  selector: 'app-lame-vue',
  templateUrl: './lame-vue.component.html',
  styleUrls: ['./lame-vue.component.css']
})
export class LameVueComponent {

  utilisateurs = [
    {
      nom: 'Julie Amandier',
      email: 'prenom@nom-entreprise.com',
      identifiant: 'J-Amandier',
      telephone: '+33 6 76 54 34 56',
      restrictionPerimetre: 'Aucune',
      restrictionHabilitation: 'Oui',
      creePar: 'Administrateur-mon-entreprise-1',
      dateCreation: '24/06/2022 à 14:20',
      derniereConnexion: '26 Janvier 2023 à 06h17'
    },

    {
      nom: 'Julie Amandier',
      email: 'prenom@nom-entreprise.com',
      identifiant: 'J-Amandier',
      telephone: '+33 6 76 54 34 56',
      restrictionPerimetre: 'Aucune',
      restrictionHabilitation: 'Oui',
      creePar: 'Administrateur-mon-entreprise-1',
      dateCreation: '24/06/2022 à 14:20',
      derniereConnexion: '26 Janvier 2023 à 06h17'
    },

    {
      nom: 'Julie Amandier',
      email: 'prenom@nom-entreprise.com',
      identifiant: 'J-Amandier',
      telephone: '+33 6 76 54 34 56',
      restrictionPerimetre: 'Aucune',
      restrictionHabilitation: 'Oui',
      creePar: 'Administrateur-mon-entreprise-1',
      dateCreation: '24/06/2022 à 14:20',
      derniereConnexion: '26 Janvier 2023 à 06h17'
    },
  ];
}
