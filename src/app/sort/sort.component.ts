import { Component, OnInit } from "@angular/core";
import { EditorService, News } from "../editor.service";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import Swal from "sweetalert2";
import { MatDialog } from "@angular/material/dialog";
import { EditorComponent } from "../editor/editor.component";
@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html",
  styleUrls: ["./sort.component.css"],
})
export class SortComponent implements OnInit {
  constructor(public editorService: EditorService) {}

  ngOnInit() {}

  delete(index: number, item: News) {
    Swal.fire({
      title: `Delete ${item.title}`,
      text: "Are you sure?",
      type: "error",
      confirmButtonText: "Delete",
      confirmButtonColor: "#f44336",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        this.editorService.removeOne(index);
      }
    });
  }

  edit(i: number, item: News) {
    this.editorService.select(i, item);
  }
}
