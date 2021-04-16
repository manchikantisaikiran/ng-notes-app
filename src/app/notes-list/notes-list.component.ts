import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note, ShowData } from '../note'
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  // @Output() showAddForm = new EventEmitter()
  // @Output() showEditForm = new EventEmitter()
  notes: Note[] = [];
  @Output() showForm = new EventEmitter<ShowData>()
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe(note => this.notes = note)
  }

  addNote() {
    // this.showAddForm.emit(true)
    this.showForm.emit({ isAdd: true, showForm: true })
  }

  editNote(note:Note) {
    // this.showEditForm.emit(true)
    this.notesService.trackNoteToEdit(note)
    this.showForm.emit({ isAdd: false, showForm: true })
  }

  deleteNote(note:Note){
    this.notesService.deleteNotes(note)
  }

}
