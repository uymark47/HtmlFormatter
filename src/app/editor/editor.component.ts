import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EditorService, News, EditNews } from '../editor.service';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  editorForm: FormGroup;
  selectedData: News;
  index = 0;
  id = 0;

  constructor(
    public formBuilder: FormBuilder,
    private editorService: EditorService,
  ) {
    this.setUpForm();
  }

  ngOnInit() {
    this.editorService.selectData.subscribe((res: EditNews) => {
      this.selectedData = res.news;
      this.index = res.index;
      this.patchData(res.news);
    })
  }

  setUpForm() {
    this.editorForm = this.formBuilder.group({
      id: new FormControl(this.id),
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      source: new FormControl('', Validators.required),
      paywall: new FormControl(),
      rank: new FormControl(),
    });
  }

  patchData(data) {
    console.log(data);
    this.editorForm.patchValue({ id: data.id });
    this.editorForm.patchValue({ title: data.title });
    this.editorForm.patchValue({ body: data.body });
    this.editorForm.patchValue({ link: data.link });
    this.editorForm.patchValue({ source: data.source });
    this.editorForm.patchValue({ paywall: data.paywall });
  }

  update() {
    if (this.editorForm.valid) {
      const data = this.editorForm.value;
      this.editorService.edit(data, this.index);
      this.clearData();
    }
  }

  submit() {
    if (this.editorForm.valid) {
      const data = this.editorForm.value;
      this.editorService.addNews(data);
      this.id += 1;
      this.clearData();
    }
  }

  clearData() {
    this.editorForm.patchValue({ title: '' });
    this.editorForm.patchValue({ body: '' });
    this.editorForm.patchValue({ link: '' });
    this.editorForm.patchValue({ rank: '' });
    this.index = 0;
    this.selectedData = null;
  }

  clear() {
    Swal.fire({
      title: `Delete Data`,
      text: 'Are you sure?',
      type: 'error',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#f44336',
      showCancelButton: true,
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this.editorService.clearItems();
      }
    });
  }
}
