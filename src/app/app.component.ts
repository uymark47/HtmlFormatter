import { Component } from '@angular/core';
import { EditorService } from './editor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HtmlFormat';
  selectedTabIndex = -1;

  constructor(
    public editorService: EditorService
  ) {
    this.editorService.selectData.subscribe((res) => {
      if (res) {
        this.selectedTabIndex = -1;
      }
    });
  }

  onChangeIndex(i) {
    this.selectedTabIndex = i;
  }
}
