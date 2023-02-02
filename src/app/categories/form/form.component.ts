import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, Category2 } from '../category.dto';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() back = new EventEmitter();
  @Output() save = new EventEmitter<Category>();

  categoryForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl(''),
  });

  @Input()
  set category(category: Category2) {
    this.categoryForm.setValue(category);
  }

  onSubmit() {
    console.log("form submitted", this.categoryForm.value as unknown as Category);
    this.save.emit(this.categoryForm.value as unknown as Category);
  }

  onBack() {
    this.back.emit();
  }
}
