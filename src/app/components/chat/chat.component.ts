import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  message: string = '';

  sendMessage() {
    console.log('Mensaje enviado:', this.message);
    this.message = ''; // Limpiar el campo después de enviar
  }
}
