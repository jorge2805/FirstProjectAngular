import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../supplier.dto';

@Component({
  selector: 'app-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styles: [
  ]
})
export class SuppliersFormComponent implements OnInit {
  @Output() save = new EventEmitter<Supplier>();
  @Input() supplier!: Supplier;
  supplierForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.supplierForm = this.fb.group({
      id: [this.supplier.id],
      companyName: [this.supplier.companyName, [Validators.required, Validators.minLength(3)]],
      contactName: [this.supplier.contactName, [Validators.required, Validators.minLength(3)]],
      contactTitle: [this.supplier.contactTitle],
      address: this.fb.group ({
        street: [this.supplier.address.street],
        city: [this.supplier.address.city],
        region: [this.supplier.address.region],
        postalCode: [this.supplier.address.postalCode],
        country: [this.supplier.address.country],
        phone: [this.supplier.address.phone],
      })      
    });
  }

  onSubmit() {
    this.save.emit(this.supplierForm.value);
  }
}
