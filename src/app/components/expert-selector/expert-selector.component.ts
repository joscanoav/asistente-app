import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-selector',
  imports: [],
  templateUrl: './expert-selector.component.html',
  styleUrl: './expert-selector.component.css'
})
export class ExpertSelectorComponent {
  expert: string = '';

  saveExpert() {
    console.log('Experto seleccionado:', this.expert);
  }
}
