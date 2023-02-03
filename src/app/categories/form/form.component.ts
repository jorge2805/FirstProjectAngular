import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() back = new EventEmitter();
  @Output() save = new EventEmitter<Category>();

  //categoryForm = new FormGroup({
  //  id: new FormControl(0),
  //  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //  description: new FormControl(''),
  //});

  constructor(private fb: FormBuilder) { }

  categoryForm = this.fb.group({
    id:[0],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description:['']
  })

  @Input()
  set category(category: Category) {
    this.categoryForm.setValue(category);
  }

  onSubmit() {
    console.log("form submitted", this.categoryForm.value as Category);
    this.save.emit(this.categoryForm.value as Category);
  }

  onBack() {
    this.back.emit();
  }
}
