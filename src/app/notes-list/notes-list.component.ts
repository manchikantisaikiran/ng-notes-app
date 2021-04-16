import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShowData } from '../note'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  // @Output() showAddForm = new EventEmitter()
  // @Output() showEditForm = new EventEmitter()
  @Output() showForm = new EventEmitter<ShowData>()
  constructor() { }

  ngOnInit(): void {
  }

  addNote() {
    // this.showAddForm.emit(true)
    this.showForm.emit({ isAdd: true, showForm: true })
  }

  editNote() {
    // this.showEditForm.emit(true)
    this.showForm.emit({ isAdd: false, showForm: true })
  }

}
