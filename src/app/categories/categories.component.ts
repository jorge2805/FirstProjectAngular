import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CategoriesDataSource, CategoriesItem } from './categories-datasource';
import { Category, Category2 } from './category.dto';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [`
    .full-width-table {
      width: 100%;
    }
    
  `]
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CategoriesItem>;
  dataSource!: MatTableDataSource<Category>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','description','actions'];

  showForm: boolean = false;
  category!: Category2;

  constructor(private categoryService: CategoryService) { }

  ngAfterViewInit(): void {
    this.refreshData();
  }
  onNewCategoryClick() {
    this.showForm = true;
  }
  onBackForm() {
    this.showForm = false;
    this.refreshData();
  }

  refreshData() {
    this.categoryService.getAll().subscribe(
      categories => {
        this.dataSource = new MatTableDataSource(categories);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }
    );
  }

  onSave(category: Category) {
    this.categoryService.save(category).subscribe((categorySaved) => {
      this.showForm = false;
      this.refreshData();
    })
  }

  onEditCategory(category: Category) {
    var category2: Category2 = { id: String(category.id), name: category.name, description: category.description }
    this.category = category2;
    console.log('edit category', category2);
    this.showForm = true;
  }
  onDeleteCategory(category: Category) {

    console.log('Delete category', category);
    this.categoryService.delete(category).subscribe({});
    this.refreshData();
  }

}
