import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Note } from '../note'

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.component.html',
  styleUrls: ['./add-new-note.component.css']
})
export class AddNewNoteComponent implements OnInit {

  @Output() cancelAddingNote = new EventEmitter<boolean>()

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addNote(){
    console.log(this.form)
    if(this.form.status === 'INVALID'){
      return;
    }
    console.log('came')
  }

  cancelAdding() {
    this.cancelAddingNote.emit(false)
  }

  get Helper(){
    return this.form.controls
  }

}
