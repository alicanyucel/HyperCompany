import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentDate: string;

  constructor() {
    const today = new Date();
    this.currentDate = this.formatDate(today);
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear(); 
    return `${day}/${month}/${year}`; 
  }
}
