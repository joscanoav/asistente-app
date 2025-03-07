import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  
  uploadedFiles: string[] = [];

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file.name);
    }
  }

}
