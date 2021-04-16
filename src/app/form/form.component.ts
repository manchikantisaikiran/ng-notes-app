import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Note, ShowData } from '../note'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() isDisplayAddForm!: boolean;
  @Output() cancelProcess = new EventEmitter<boolean>()

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.isDisplayAddForm)
  }

  addNote() {
    console.log(this.form)
    if (this.form.status === 'INVALID') {
      return;
    }
    console.log('came')
  }

  cancelProcessFunc() {
    this.cancelProcess.emit(false)
  }

  get Helper() {
    return this.form.controls
  }

}
