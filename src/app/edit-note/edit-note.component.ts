import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  @Output() cancelEditingNote = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  cancelEditing(){
    this.cancelEditingNote.emit(false)
  }

}
