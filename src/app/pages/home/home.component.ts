import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ChatComponent } from '../../components/chat/chat.component';
import { FileUploadComponent } from '../../components/file-upload/file-upload.component';
import { ExpertSelectorComponent } from '../../components/expert-selector/expert-selector.component';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, ChatComponent, FileUploadComponent, ExpertSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
