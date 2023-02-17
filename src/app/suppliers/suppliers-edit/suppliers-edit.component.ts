import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styles: [
  ]
})
export class SuppliersEditComponent implements OnInit {
  id!: Number;
  supplier!: Supplier;
  supplierObservable!: Observable<Supplier>;

  constructor(private route: ActivatedRoute, private supplierService: SupplierService, private router: Router) { }

  async ngOnInit() {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.supplierObservable = this.supplierService.getById(this.id);
    this.supplier = await lastValueFrom(this.supplierObservable);
  }
  async onSave(supplier: Supplier) {
    this.supplierObservable = this.supplierService.save(supplier);
    this.supplier = await lastValueFrom(this.supplierObservable);
    this.router.navigate(['/suppliers/show', supplier?.id]);
  }
}
