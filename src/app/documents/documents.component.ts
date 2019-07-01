import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "asdf",
      file_url: 'http://google.com',
      updated_at: '01/07/19',
      image_url: 'http://google.com'
    },
    {
      title: "My Second Doc",
      description: "asdf",
      file_url: 'http://google.com',
      updated_at: '01/07/19',
      image_url: 'http://google.com'
    },
    {
      title: "My Last Doc",
      description: "asdf",
      file_url: 'http://google.com',
      updated_at: '01/07/19',
      image_url: 'http://google.com'
    },
  ]
}