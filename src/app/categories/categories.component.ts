import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CategoriesDataSource, CategoriesItem } from './categories-datasource';
import { Category } from './category.dto';
import { CategoryService } from './category.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertConfirmComponent } from '../alert-confirm/alert-confirm.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [`
    .full-width-table {
      width: 100%;
    }
    
  `]
})
export class CategoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Category>;
  dataSource!: MatTableDataSource<Category>;
  showLoading: boolean = false;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','description','actions'];

  showForm: boolean = false;
  category!: Category;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshData();
  }
  onNewCategoryClick() {
    this.showForm = true;
    this.category = { id: 0, name: '', description: '' };
  }
  onBackForm() {
    this.showForm = false;
    this.refreshData();
  }

  async refreshData() {
    this.showLoading = true;

    try {
      let categories: Category[] = await lastValueFrom(
        this.categoryService.getAll()
      );
      this.dataSource = new MatTableDataSource(categories);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      //this.table.dataSource = this.dataSource;
    } catch (e) {
      console.log('estoy refreshData', e);
    } finally {
      this.showLoading = false;
    }     
  }

  onSave(category: Category) {
    this.showLoading = true;
    this.categoryService.save(category).subscribe((categorySaved) => {
      this.showForm = false;
      this.refreshData();
      this.showLoading = false;
    })
  }

  onEditCategory(category: Category) {
    var category: Category = { id: category.id, name: category.name, description: category.description }
    this.category = category;
    console.log('edit category', category);
    this.showForm = true;
  }
  onDeleteCategory(category: Category) {

    console.log('Delete category', category);
    this.categoryService.delete(category).subscribe(() => {
      this.refreshData();
    });
  }

  showConfirmDelete(category: Category) {
    let resDial = this.dialog.open(AlertConfirmComponent, {
      width: '250px'
    });
    resDial.afterClosed().subscribe((res) => {
      if (res) this.onDeleteCategory(category);
    })
  }

}
