import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';



@Component({
  selector: 'app-under-header',
  templateUrl: './under-header.component.html',
  styleUrls: ['./under-header.component.css']
})
export class UnderHeaderComponent implements OnInit {
  titre: string= "Comptes Espace Client";
  hello!:string;
  activeTab!: string


ngOnInit(): void {
   this.selectTab("users")

}


  selectTab(tab: string) {
    this.activeTab = tab;

    if(tab==='users') this.hello="users";
    else if(tab==='admin') this.hello="souhaaail"
    else this.hello="mashallah"
  }




}
