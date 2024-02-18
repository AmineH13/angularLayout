import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  showPerimetreDropdown: boolean = false;
  selectedPerimetre: string = 'Restriction de périmètre'; 
  perimetres: string[] = ['Restriction de périmètre','english', 'français', 'spanish']; 



  showHabilitationDropdown: boolean = false;
  selectedHabilitation: string = 'Restriction d\'habilitation'; 
  habilitations: string[] = ['Restriction d\'habilitation','english', 'français', 'spanish']; 

  togglePerimetreDropdown() {
    this.showPerimetreDropdown = !this.showPerimetreDropdown;
  }

  selectPerimetre(perim: string) {
    this.selectedPerimetre = perim; 
    this.togglePerimetreDropdown();
  }


  toggleHabilitationDropdown() {
    this.showHabilitationDropdown = !this.showHabilitationDropdown;
  }

  selectHabilitation(perim: string) {
    this.selectedHabilitation = perim; 
    this.toggleHabilitationDropdown();
  }
}
