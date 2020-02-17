import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewerComponent } from './viewer/viewer.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditorService } from './editor.service';
import { MatButtonModule } from '@angular/material/button';
import { SortComponent } from './sort/sort.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    EditorComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    DragDropModule,
    MatListModule,
    StorageServiceModule,
    MatDialogModule,
  ],
  entryComponents: [EditorComponent],
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
