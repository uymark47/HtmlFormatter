import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(
    public editorService: EditorService,
  ) { }

  ngOnInit() {
  }

}
