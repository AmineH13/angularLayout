import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showLanguageDropdown: boolean = false;
  selectedLanguage: string = 'français'; 
  languages: string[] = ['english', 'français', 'spanish']; 


  showTestDropdown: boolean = false;
  selectedTest: string = 'DMC_Test'; 
  tests: string[] = ['DMC_Test', 'Coucou_Test', 'Hiilou_Test']; 


  showMenuDropdown: boolean = true;
  selectedItem: string = 'Menu'; 
  menu: string[] = ['acceuil', 'vos sociétés', 'vos factures', 'vos demandes & incidents',
    'votre flotte mobile', 'votre parc fixe', 'pack business', 'vos services', 'vos contrats & contracts SFR', 'tutoriels'
  ]; 


  toggleLanguageDropdown() {
    this.showLanguageDropdown = !this.showLanguageDropdown;
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang; 
    this.toggleLanguageDropdown();
  }


  toggleTestDropdown() {
    this.showTestDropdown = !this.showTestDropdown;
  }

  selectTest(test: string) {
    this.selectedTest = test; 
    this.toggleTestDropdown();
  }

  toggleMenuDropdown() {
    this.showMenuDropdown = !this.showMenuDropdown;
  }

  selectItem(item: string) {
    this.selectedItem = item; 
  }


  navigateVosCompteEspaceClient(){
    console.log("vos compte espace client")
  }

  navigateVosCommandes(){
    console.log("vos commandes")
  }
}
